import { useTranslations } from "next-intl";
import CreditCardIcon from "./icons/CreditCardIcon";
import Availability from "./Availability";

export default function Sessions() {
  const t = useTranslations("sessions");

  return (
    <section
      className="w-full lg:h-screen flex flex-col lg:flex-row lg:justify-center items-center gap-20 px-8 lg:px-0 pt-16 lg:pt-0"
      id="sessions"
    >
      <div className="flex justify-center items-center about-shadow ">
        <div
          title={t("imageTitle")}
          className="w-[16rem] h-[20rem] md:w-[20rem] md:h-[28rem] xl:w-[28rem] xl:h-[36rem] bg-[url('/assets/about-me.png')] bg-cover bg-center"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl lg:text-8xl text-theme-foreground font-patrick">
          {t("title")}
        </h1>
        <div className="text-theme-foreground flex flex-col justify-normal gap-2 lg:gap-4">
          <p className="text-md lg:text-2xl">{t("lead")}</p>
          <p className="text-md lg:text-2xl">{t("body")}</p>
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
            <Availability showNote={false} showCta={false} />
            <div className="flex-1">
              <h3 className="text-2xl lg:text-4xl font-patrick">{t("rates")}</h3>
              <ul className="flex flex-col gap-1 lg:gap-2 mt-2 lg:mt-4">
                <li className="text-md lg:text-2xl text-theme-foreground">
                  <CreditCardIcon
                    color="currentColor"
                    aria-hidden="true"
                    className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                  />
                  {t("individual")}
                </li>
                <li className="text-md lg:text-2xl text-theme-foreground">
                  <CreditCardIcon
                    color="currentColor"
                    aria-hidden="true"
                    className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                  />
                  {t("package4")}
                </li>
                <li className="text-md lg:text-2xl text-theme-foreground">
                  <CreditCardIcon
                    color="currentColor"
                    aria-hidden="true"
                    className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                  />
                  {t("package6")}
                </li>
                <li className="text-md lg:text-2xl text-theme-foreground">
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
          <p className="text-md lg:text-2xl">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
