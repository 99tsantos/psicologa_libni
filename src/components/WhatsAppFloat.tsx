"use client";

import { useTranslations } from "next-intl";
import { track } from "@vercel/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useWhatsAppHandoff } from "./WhatsAppHandoff";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function WhatsAppFloat({
  shifted = false,
}: {
  shifted?: boolean;
}) {
  const t = useTranslations("whatsapp");
  const { footerActive } = useWhatsAppHandoff();
  const hidden = footerActive;

  return (
    <a
      href={buildWhatsAppUrl(t("msg"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
      onClick={() => track("whatsapp_click", { location: "float" })}
      className={`fixed bottom-6 right-6 z-20 flex w-14 h-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 motion-reduce:transition-none hover:scale-105 ${shifted ? "-translate-x-64" : "translate-x-0"} md:translate-x-0 ${hidden ? "pointer-events-none scale-90 opacity-0" : "scale-100 opacity-100"}`}
    >
      <WhatsAppIcon color="#fff" aria-hidden="true" className="w-8 h-8" />
    </a>
  );
}
