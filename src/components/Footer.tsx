"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { track } from "@vercel/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useWhatsAppHandoff } from "./WhatsAppHandoff";
import EmailIcon from "./icons/EmailIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TikTokIcon from "./icons/TikTokIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Footer() {
  const t = useTranslations("footer");
  const tWa = useTranslations("whatsapp");
  const { footerActive, setFooterActive } = useWhatsAppHandoff();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterActive(entry.isIntersecting),
      // Anticipate the fixed float zone (bottom-6 + h-14 ≈ 80px) so the
      // handoff fires as overlap would begin, not after it.
      { rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setFooterActive]);

  return (
    <footer
      ref={footerRef}
      className="w-full flex justify-center items-center gap-6 py-8"
    >
      <a
        href={buildWhatsAppUrl(tWa("msg"))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("whatsapp")}
        onClick={() => track("whatsapp_click", { location: "footer" })}
        className="text-theme-foreground hover:opacity-70 transition-opacity"
      >
        <span
          className={`flex w-12 h-12 items-center justify-center rounded-full transition-colors duration-300 motion-reduce:transition-none ${footerActive ? "bg-[#25D366]" : "bg-transparent"}`}
        >
          <WhatsAppIcon
            color={footerActive ? "#fff" : "currentColor"}
            aria-hidden="true"
            className="w-8 h-8"
          />
        </span>
      </a>
      <a
        href="https://www.instagram.com/psicologa_libni"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("instagram")}
        onClick={() => track("instagram_click")}
        className="text-theme-foreground hover:opacity-70 transition-opacity"
      >
        <span className="flex w-12 h-12 items-center justify-center">
          <InstagramIcon
            color="currentColor"
            aria-hidden="true"
            className="w-8 h-8"
          />
        </span>
      </a>
      <a
        href="https://www.tiktok.com/@lib.psique"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("tiktok")}
        onClick={() => track("tiktok_click")}
        className="text-theme-foreground hover:opacity-70 transition-opacity"
      >
        <span className="flex w-12 h-12 items-center justify-center">
          <TikTokIcon
            color="currentColor"
            aria-hidden="true"
            className="w-8 h-8"
          />
        </span>
      </a>
      <a
        href="#contact-me"
        aria-label={t("email")}
        onClick={() => track("email_click")}
        className="text-theme-foreground hover:opacity-70 transition-opacity"
      >
        <span className="flex w-12 h-12 items-center justify-center">
          <EmailIcon
            color="currentColor"
            aria-hidden="true"
            className="w-8 h-8"
          />
        </span>
      </a>
    </footer>
  );
}
