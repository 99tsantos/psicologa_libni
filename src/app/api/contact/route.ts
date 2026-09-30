import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const payload = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(2000),
  preferred: z.string().trim().max(200).optional().default(""),
  // Honeypot: real visitors never fill this (CSS off-screen). Bots do.
  company: z.string().max(200).optional().default(""),
});

const ok = () => NextResponse.json({ ok: true });
const fail = (status: number) => NextResponse.json({ ok: false }, { status });

// Best-effort per-instance sliding window (10/hour per IP). Serverless
// instances don't share memory; fine at this traffic, upgrade to KV if abused.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 10;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return ok(); // malformed JSON = bot probe, silent reject
  }
  const parsed = payload.safeParse(body);
  if (!parsed.success) {
    return fail(400);
  }
  const { name, email, message, preferred, company } = parsed.data;
  if (company.length > 0) {
    return ok(); // honeypot filled = bot, fake success so it moves on
  }
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return ok(); // don't signal the limit to bots
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!apiKey || !to) {
    return fail(500);
  }
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Libni Web <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject: `Nuevo mensaje web — ${name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        preferred ? `Horario preferido: ${preferred}` : null,
        "",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });
    if (error) {
      return fail(502);
    }
    return ok();
  } catch {
    return fail(500);
  }
}
