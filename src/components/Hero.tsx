import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const raw = t.raw("intro");
  const intro =
    Array.isArray(raw) && raw.length === 5 ? (raw as string[]) : null;
  const introFallback = Array.isArray(raw)
    ? (raw as unknown[]).join("")
    : String(raw ?? "");

  return (
    <section
      className="w-full lg:h-screen flex flex-col lg:flex-row lg:justify-center items-center gap-20 px-8 lg:px-0"
      id="hero"
    >
      <div
        title={t("imageTitle")}
        className="w-[16rem] h-[16rem] md:w-[20rem] md:h-[20rem] xl:w-[28rem] xl:h-[28rem] bg-[url('/assets/libnigonzalez.png')] bg-cover bg-center"
      />
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl lg:text-7xl text-theme-foreground font-patrick">
          {t("title")}
        </h1>
        <div className="text-theme-foreground flex flex-col justify-normal gap-2 lg:gap-4">
          <p className="text-md lg:text-2xl">
            {t("welcome")}
            <br />
            {intro ? (
              <>
                {intro[0]}
                <span className="font-bold">{intro[1]}</span>
                {intro[2]}
                <span className="font-bold">{intro[3]}</span>
                {intro[4]}
              </>
            ) : (
              introFallback
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
