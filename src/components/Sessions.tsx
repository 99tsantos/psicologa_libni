import { useTranslations } from "next-intl";
import Availability from "./Availability";

export default function Sessions() {
  const t = useTranslations("sessions");
  const bodyRaw = t.raw("body") as unknown;
  const bodySegments: string[] | null = Array.isArray(bodyRaw)
    ? (bodyRaw as string[])
    : null;
  const ratesRaw = t.raw("ratesNote") as unknown;
  const ratesSegments: string[] | null = Array.isArray(ratesRaw)
    ? (ratesRaw as string[])
    : null;

  return (
    <section
      className="w-full lg:min-h-screen flex flex-col lg:flex-row lg:justify-center items-center gap-20 px-8 lg:px-0 pt-16 lg:pt-0"
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
          {bodySegments ? (
            <>
              <p className="text-md lg:text-2xl">
                <span className="font-bold">{bodySegments[0]}</span>
              </p>
              {bodySegments.slice(1).map((segment, i) => (
                <p key={i} className="text-md lg:text-2xl">
                  {segment}
                </p>
              ))}
            </>
          ) : (
            <p className="text-md lg:text-2xl">{String(bodyRaw ?? "")}</p>
          )}
          <div className="text-sm lg:text-lg italic opacity-80">
            <p className="font-bold">{t("ratesCta")}</p>
            <p>
              {ratesSegments ? (
                <>
                  {ratesSegments[0]}
                  <a
                    href="#contact-me"
                    className="underline underline-offset-2 font-semibold hover:opacity-100"
                  >
                    {ratesSegments[1]}
                  </a>
                  {ratesSegments[2]}
                </>
              ) : (
                String(ratesRaw ?? "")
              )}
            </p>
          </div>
          <Availability />
        </div>
      </div>
    </section>
  );
}
