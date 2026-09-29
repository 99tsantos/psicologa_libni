import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  const subtitleRaw = t.raw("subtitle");
  const methodRaw = t.raw("method");
  const subtitle =
    Array.isArray(subtitleRaw) && subtitleRaw.length === 5
      ? (subtitleRaw as string[])
      : null;
  const method =
    Array.isArray(methodRaw) && methodRaw.length === 10
      ? (methodRaw as string[])
      : null;

  return (
    <section
      id="services"
      className="w-full lg:h-screen flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-8 px-8 lg:px-0 pt-16 lg:pt-0"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl lg:text-8xl text-theme-foreground font-patrick">
          {t("title")}
        </h1>
        <p className="text-xl lg:text-2xl text-theme-foreground">
          {subtitle ? (
            <>
              {subtitle[0]}
              <span className="font-bold">{subtitle[1]}</span>
              {subtitle[2]}
              <span className="font-bold">{subtitle[3]}</span>
              {subtitle[4]}
            </>
          ) : (
            String(subtitleRaw ?? "")
          )}
        </p>
        <p className="text-lg lg:text-2xl text-theme-foreground">
          {method ? (
            <>
              {method[0]}
              <br />
              <span className="font-bold">{method[1]}</span>
              {method[2]}
              <br />
              <span className="font-bold">{method[3]}</span>
              {method[4]}
              <br />
              <span className="font-bold">{method[5]}</span>
              <br />
              <span className="font-bold">{method[6]}</span>
              {method[7]}
              <br />
              <span className="font-bold">{method[8]}</span>
              {method[9]}
            </>
          ) : (
            String(methodRaw ?? "")
          )}
        </p>
      </div>
      <div className="bg-theme-muted px-8 xl:px-12 services-shadow">
        <div
          title={t("imageTitle")}
          className="w-[16rem] h-[20rem] md:w-[20rem] md:h-[28rem] xl:w-[28rem] xl:h-[36rem] bg-[url('https://psychdegreestarter.com/wp-content/uploads/sites/8/2025/08/archereduas_Modern_therapists_office_with_symbolic_objects_an_A_64d0ffb0-8d12-4e92-afd7-2c721071a3f3-1024x408.jpg')] bg-cover bg-center"
        />
      </div>
    </section>
  );
}
