import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const raw = t.raw("intro") as unknown;

  // Supports: string[][] (paragraphs with alternating plain/bold segments)
  // and legacy flat string[] (single paragraph, odd indexes bold).
  const paragraphs: string[][] | null = Array.isArray(raw)
    ? Array.isArray((raw as unknown[])[0])
      ? (raw as string[][])
      : [raw as string[]]
    : null;
  const introFallback = Array.isArray(raw)
    ? (raw as unknown[]).join("")
    : String(raw ?? "");

  return (
    <section
      className="w-full lg:min-h-screen flex flex-col lg:flex-row lg:justify-center items-center gap-20 px-8 lg:px-0"
      id="hero"
    >
      <div
        title={t("imageTitle")}
        className="w-[16rem] h-[16rem] bg-[url('/assets/hero-mobile.png')] bg-cover bg-center mt-16 hero-shadow md:hidden"
      />
      <div
        title={t("imageTitle")}
        className="hidden md:block md:w-[20rem] md:h-[34rem] xl:w-[28rem] xl:h-[38rem] bg-[url('/assets/hero.png')] bg-cover bg-center mt-16 hero-shadow"
      />
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl lg:text-7xl text-theme-foreground font-patrick">
          {t("title")}
        </h1>
        <div className="text-theme-foreground flex flex-col justify-normal gap-2 lg:gap-4">
          <p className="text-md lg:text-2xl">{t("welcome")}</p>
          {paragraphs ? (
            paragraphs.map((para, pi) => (
              <p key={pi} className="text-md lg:text-2xl">
                {para.map((segment, si) =>
                  si % 2 === 1 ? (
                    <span key={si} className="font-bold">
                      {segment}
                    </span>
                  ) : (
                    <span key={si}>{segment}</span>
                  ),
                )}
              </p>
            ))
          ) : (
            <p className="text-md lg:text-2xl">{introFallback}</p>
          )}
        </div>
      </div>
    </section>
  );
}
