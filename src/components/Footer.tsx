import { useTranslations } from "next-intl";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import EmailIcon from "./icons/EmailIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TikTokIcon from "./icons/TikTokIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Footer() {
  const t = useTranslations("footer");
  const tWa = useTranslations("whatsapp");

  return (
    <footer className="w-full flex justify-center items-center gap-6 py-8">
      <a
        href={buildWhatsAppUrl(tWa("msg"))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("whatsapp")}
        className="text-theme-foreground hover:opacity-70 transition-opacity"
      >
        <WhatsAppIcon
          color="currentColor"
          aria-hidden="true"
          className="w-8 h-8"
        />
      </a>
      <a
        href="https://www.instagram.com/psicologa_libni"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("instagram")}
        className="text-theme-foreground hover:opacity-70 transition-opacity"
      >
        <InstagramIcon
          color="currentColor"
          aria-hidden="true"
          className="w-8 h-8"
        />
      </a>
      <a
        href="https://www.tiktok.com/@lib.psique"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("tiktok")}
        className="text-theme-foreground hover:opacity-70 transition-opacity"
      >
        <TikTokIcon
          color="currentColor"
          aria-hidden="true"
          className="w-8 h-8"
        />
      </a>
      <a
        href="mailto:psicologalibnigonzalez@gmail.com"
        aria-label={t("email")}
        className="text-theme-foreground hover:opacity-70 transition-opacity"
      >
        <EmailIcon
          color="currentColor"
          aria-hidden="true"
          className="w-8 h-8"
        />
      </a>
    </footer>
  );
}
