import { useTranslations } from "next-intl";
import PhotoStack from "./PhotoStack";

export default function AboutMe() {
  const t = useTranslations("about");
  const raw = t.raw("body") as unknown;

  // Paragraphs with alternating plain/bold segments (odd indexes bold),
  // same convention as the hero intro.
  const paragraphs: string[][] | null = Array.isArray(raw)
    ? (raw as string[][])
    : null;

  return (
    <section
      className="w-full lg:min-h-screen flex flex-col lg:flex-row lg:justify-center items-center gap-20 px-8 lg:px-0 pt-16 lg:pt-0"
      id="about-me"
    >
      <div className="flex justify-center items-center lg:order-2">
        <PhotoStack
          photos={[
            { src: "/assets/aboutme-1.png", alt: t("imageTitle") },
            { src: "/assets/aboutme-2.png", alt: t("imageTitle") },
            { src: "/assets/aboutme-3.png", alt: t("imageTitle") },
            { src: "/assets/aboutme-4.png", alt: t("imageTitle") },
          ]}
          className="w-[16rem] h-[20rem] md:w-[20rem] md:h-[28rem] xl:w-[28rem] xl:h-[36rem] md:mt-20"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8 lg:order-1">
        <h1 className="text-4xl lg:text-8xl text-theme-foreground font-patrick">
          {t("title")}
        </h1>
        <div className="text-theme-foreground flex flex-col justify-normal gap-2 lg:gap-4">
          {paragraphs?.map((para, pi) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
