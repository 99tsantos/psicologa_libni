import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Roboto, Patrick_Hand } from "next/font/google";
import Navbar from "@/components/navbar";
import { routing } from "@/i18n/routing";
import "../globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});
const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-patrick-hand",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!routing.locales.includes(params.locale as "es" | "en" | "pt"))
    notFound();
  const t = await getTranslations({
    locale: params.locale,
    namespace: "metadata",
  });
  return { title: t("title"), description: t("description") };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(params.locale as "es" | "en" | "pt"))
    notFound();
  const messages = await getMessages();

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={`${roboto.variable} ${patrickHand.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
