import { useTranslations } from "next-intl";
import CalendarIcon from "./icons/CalendarIcon";
import CreditCardIcon from "./icons/CreditCardIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import TikTokIcon from "./icons/TikTokIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function ContactMe() {
  const t = useTranslations("contact");
  const footer = t.raw("footer") as string[];

  return (
    <section
      id="contact-me"
      className="w-full lg:h-screen flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-8 px-8 lg:px-0 mt-16 lg:pt-0"
    >
      <div className="w-full h-full flex flex-col justify-evenly lg:items-center gap-8 lg:px-12">
        <h1 className="text-4xl lg:text-8xl text-theme-foreground font-patrick lg:mb-8">
          {t("title")}
        </h1>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 justify-center">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl lg:text-4xl font-patrick">
              {t("contactMe")}
            </h3>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li className="text-theme-foreground border-b-2 border-b-transparent hover:border-b-theme-foreground border-solid py-1 cursor-pointer">
                <WhatsAppIcon
                  color="currentColor"
                  aria-hidden="true"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                <a
                  href="https://wa.me/50250995715"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +502 4434 8829
                </a>
              </li>
              <li className="text-theme-foreground border-b-2 border-b-transparent hover:border-b-theme-foreground border-solid py-1 cursor-pointer">
                <InstagramIcon
                  color="currentColor"
                  aria-hidden="true"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                <a
                  href="https://www.instagram.com/psicologa_libni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @psicologa_libni
                </a>
              </li>
              <li className="text-theme-foreground border-b-2 border-b-transparent hover:border-b-theme-foreground border-solid py-1 cursor-pointer">
                <TikTokIcon
                  color="currentColor"
                  aria-hidden="true"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                <a
                  href="https://www.tiktok.com/@lib.psique"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @lib.psique
                </a>
              </li>
              <li className="text-theme-foreground border-b-2 border-b-transparent hover:border-b-theme-foreground border-solid py-1 cursor-pointer">
                <LinkedInIcon
                  color="currentColor"
                  aria-hidden="true"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                <a
                  href="https://www.linkedin.com/in/psicologalibnig/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @psicologalibnig
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl lg:text-4xl font-patrick">{t("hours")}</h3>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li className="text-theme-foreground py-1">
                <CalendarIcon
                  color="currentColor"
                  aria-hidden="true"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                {t("weekdays")}
              </li>
              <li className="text-theme-foreground py-1">
                <CalendarIcon
                  color="currentColor"
                  aria-hidden="true"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                {t("saturday")}
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl lg:text-4xl font-patrick">{t("rates")}</h3>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li className="text-theme-foreground py-1">
                <CreditCardIcon
                  color="currentColor"
                  aria-hidden="true"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                {t("individual")}
              </li>
              <li className="text-theme-foreground py-1">
                <CreditCardIcon
                  color="currentColor"
                  aria-hidden="true"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                {t("package4")}
              </li>
              <li className="text-theme-foreground py-1">
                <CreditCardIcon
                  color="currentColor"
                  aria-hidden="true"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                {t("package6")}
              </li>
              <li className="text-theme-foreground py-1">
                <CreditCardIcon
                  color="currentColor"
                  aria-hidden="true"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                {t("package10")}
              </li>
            </ul>
          </div>
        </div>
        <h2 className="text-2xl lg:text-4xl text-theme-foreground font-patrick mb-8 text-center">
          {footer[0]}
          <br />
          {footer[1]}
          <br />
          {footer[2]}
        </h2>
      </div>
    </section>
  );
}
