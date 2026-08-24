import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      className="w-full lg:h-screen flex flex-col lg:flex-row lg:justify-center items-center gap-20 px-8 lg:px-0"
      id="hero"
    >
      <div className="bg-theme-muted px-8 xl:px-12 hero-shadow">
        <div
          title={t("imageTitle")}
          className="w-[16rem] h-[20rem] md:w-[20rem] md:h-[28rem] xl:w-[28rem] xl:h-[36rem] bg-[url('/assets/libnigonzalez.png')] bg-cover bg-center"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl lg:text-8xl text-theme-foreground font-patrick">
          {t("title")}
        </h1>
        <div className="text-theme-foreground flex flex-col justify-normal gap-2 lg:gap-4">
          <p className="text-md lg:text-2xl">
            {t("welcome")}
            <br />
            {t("intro")}
          </p>
          <p className="text-md lg:text-2xl">{t("therapy")}</p>
          <p className="text-md lg:text-2xl">{t("license")}</p>
        </div>
      </div>
    </section>
  );
}
