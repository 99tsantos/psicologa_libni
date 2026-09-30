"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { track } from "@vercel/analytics";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-xl border-2 border-theme-foreground bg-transparent text-theme-foreground px-4 py-3 text-md lg:text-xl placeholder:opacity-60 focus:outline-none focus:opacity-100 disabled:opacity-60";

type Fields = {
  name: string;
  email: string;
  preferred: string;
  message: string;
  company: string; // honeypot, humans never see it
};

const emptyFields: Fields = {
  name: "",
  email: "",
  preferred: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [status, setStatus] = useState<Status>("idle");

  const sending = status === "sending";

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return; // double-submit guard
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      track("form_error", { reason: "validation" });
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) {
        track("form_error", { reason: "server" });
        setStatus("error");
        return;
      }
      track("form_submit");
      setStatus("sent");
      setFields(emptyFields);
    } catch {
      track("form_error", { reason: "server" });
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-md lg:text-2xl text-theme-foreground text-center">
        {t("success")}
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full lg:w-1/2 flex flex-col gap-4"
      noValidate
    >
      <h2 className="text-2xl lg:text-4xl text-theme-foreground font-patrick text-center">
        {t("title")}
      </h2>
      <label className="flex flex-col gap-1 text-md lg:text-xl text-theme-foreground text-left">
        {t("name")}
        <input
          type="text"
          value={fields.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder={t("namePh")}
          autoComplete="name"
          disabled={sending}
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1 text-md lg:text-xl text-theme-foreground text-left">
        {t("email")}
        <input
          type="email"
          value={fields.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder={t("emailPh")}
          autoComplete="email"
          disabled={sending}
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1 text-md lg:text-xl text-theme-foreground text-left">
        {t("preferred")}
        <input
          type="text"
          value={fields.preferred}
          onChange={(e) => set("preferred", e.target.value)}
          placeholder={t("preferredPh")}
          autoComplete="off"
          disabled={sending}
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1 text-md lg:text-xl text-theme-foreground text-left">
        {t("message")}
        <textarea
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder={t("messagePh")}
          rows={5}
          disabled={sending}
          className={`${inputClass} resize-y`}
        />
      </label>
      {/* Honeypot: visible-type input pushed off-screen. Bots fill it,
          humans and screen readers never encounter it. */}
      <input
        type="text"
        name="company"
        value={fields.company}
        onChange={(e) => set("company", e.target.value)}
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto w-px h-px opacity-0"
      />
      {status === "error" && (
        <p className="text-md lg:text-xl text-theme-foreground text-center opacity-80">
          {t("errorServer")}
        </p>
      )}
      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-theme-foreground bg-transparent text-theme-foreground px-6 py-3 text-md lg:text-2xl w-fit self-center transition-colors hover:bg-theme-foreground hover:text-theme-surface disabled:opacity-60"
      >
        {sending ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
