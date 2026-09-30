"use client";

import { useTranslations } from "next-intl";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function WhatsAppFloat({
  shifted = false,
}: {
  shifted?: boolean;
}) {
  const t = useTranslations("whatsapp");

  return (
    <a
      href={buildWhatsAppUrl(t("msg"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      className={`fixed bottom-6 right-6 z-20 flex w-14 h-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-105 ${shifted ? "-translate-x-64" : "translate-x-0"} md:translate-x-0`}
    >
      <WhatsAppIcon color="#fff" aria-hidden="true" className="w-8 h-8" />
    </a>
  );
}
