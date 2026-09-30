import { useTranslations } from "next-intl";
import CreditCardIcon from "./icons/CreditCardIcon";

export default function ContactMe() {
  const t = useTranslations("contact");
  const footer = t.raw("footer") as string[];

  return (
    <section
      id="contact-me"
      className="w-full lg:h-screen flex flex-col lg:justify-center items-center gap-8 px-8 lg:px-0 mt-16 lg:pt-0"
    >
      <div className="w-full h-full flex flex-col justify-evenly items-center gap-8 lg:px-12">
        <h1 className="text-4xl lg:text-8xl text-theme-foreground font-patrick lg:mb-8">
          {t("title")}
        </h1>
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
