import { useTranslations } from "next-intl";
import CalendarIcon from "./icons/CalendarIcon";

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
          <p className="text-md lg:text-2xl">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
