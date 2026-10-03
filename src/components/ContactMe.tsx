import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

export default function ContactMe() {
  const t = useTranslations("contact");
  const footer = t.raw("footer") as string[];

  return (
    <section
      id="contact-me"
      className="w-full lg:min-h-screen flex flex-col lg:justify-center items-center gap-8 px-8 lg:px-0 mt-8 py-12 lg:py-16"
    >
      <div className="w-full h-full flex flex-col justify-evenly items-center gap-8 lg:px-12">
        <h1 className="text-4xl lg:text-8xl text-theme-foreground font-patrick lg:mb-8">
          {t("title")}
        </h1>
        <ContactForm />
        <h2 className="text-2xl lg:text-4xl text-theme-foreground font-patrick mb-4 text-center max-w-3xl">
          {footer[0]}
        </h2>
      </div>
    </section>
  );
}
