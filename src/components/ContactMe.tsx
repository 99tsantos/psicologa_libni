import { useTranslations } from "next-intl";
import Availability from "./Availability";
import ContactForm from "./ContactForm";

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
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
          <Availability showNote showCta className="items-center text-center [&_ul]:items-center" />
        </div>
        <ContactForm />
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
