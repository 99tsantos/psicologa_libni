"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState } from "react";

const LOCALES = ["es", "en", "pt"] as const;
const FLAG_PATHS = {
  es: "/assets/flag-es.svg",
  en: "/assets/flag-en.svg",
  pt: "/assets/flag-pt.svg",
};

export default function LanguageToggle() {
  const locale = useLocale() as (typeof LOCALES)[number];
  const t = useTranslations("language");
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const changeLocale = (nextLocale: (typeof LOCALES)[number]) => {
    setIsOpen(false);
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="relative text-theme-foreground">
      <button
        type="button"
        aria-label={t("label")}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <span aria-hidden="true" className="text-xs leading-none">
          {isOpen ? "▲" : "▼"}
        </span>
        <img src={FLAG_PATHS[locale]} alt="" className="w-6 h-4 object-cover" />
      </button>
      <ul
        aria-hidden={!isOpen}
        className={`absolute right-0 bottom-full mb-2 flex flex-col gap-2 bg-theme-surface shadow-lg pl-1 py-1 transition-all duration-200 ease-out md:top-full md:bottom-auto md:mt-2 md:mb-0 ${isOpen ? "visible translate-y-0 opacity-100 pointer-events-auto md:translate-y-0" : "invisible translate-y-2 opacity-0 pointer-events-none md:-translate-y-2"}`}
      >
        {LOCALES.filter((option) => option !== locale).map((option) => (
          <li key={option}>
            <button
              type="button"
              onClick={() => changeLocale(option)}
              aria-label={t(option)}
              title={t(option)}
              tabIndex={isOpen ? 0 : -1}
              className="flex items-center justify-center border-b-2 border-b-transparent hover:border-b-theme-foreground border-solid py-1 cursor-pointer"
            >
              <img
                src={FLAG_PATHS[option]}
                alt=""
                className="w-6 h-4 object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
