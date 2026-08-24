"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import CloseIcon from "./icons/CloseIcon";
import MenuIcon from "./icons/MenuIcon";

const NAV_IDS = ["hero", "services", "about-me", "contact-me"];

export default function Navbar() {
  const t = useTranslations("navbar");
  const [selectedSection, setSelectedSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { id: NAV_IDS[0], label: t("home") },
    { id: NAV_IDS[1], label: t("services") },
    { id: NAV_IDS[2], label: t("about") },
    { id: NAV_IDS[3], label: t("contact") },
  ];

  useEffect(() => {
    let ticking = false;
    const updateActive = () => {
      const distances = NAV_IDS.map((id) => {
        const element = document.getElementById(id);
        return element
          ? Math.abs(element.getBoundingClientRect().top)
          : Infinity;
      });
      const index = distances.indexOf(Math.min(...distances));
      if (index !== -1) setSelectedSection(index);
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = (id: string, index: number) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: window.innerWidth < 1024 ? "start" : "end",
    });
    setSelectedSection(index);
    setIsMenuOpen(false);
  };

  const controls = (
    <div className="flex items-center gap-4">
      <ThemeToggle />
      <LanguageToggle />
    </div>
  );

  return (
    <div className="w-full bg-theme-surface fixed z-10 text-theme-foreground flex justify-between items-center px-8 py-4">
      <div className="bg-[url('/assets/logo.png')] bg-cover bg-center w-10 h-10" />
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-4 md:gap-20 justify-end">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={`text-theme-foreground border-b-2 border-b-transparent hover:border-b-theme-foreground border-solid py-1 cursor-pointer font-patrick text-md lg:text-2xl ${selectedSection === index ? "font-bold" : "font-normal"}`}
              onClick={() => handleClick(item.id, index)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        {controls}
      </div>
      <button
        type="button"
        aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
        className="w-8 h-8 md:hidden cursor-pointer"
      >
        {isMenuOpen ? (
          <CloseIcon color="currentColor" className="w-full h-full" />
        ) : (
          <MenuIcon color="currentColor" className="w-full h-full" />
        )}
      </button>
      <div
        className={`fixed top-[72px] bottom-0 right-0 w-64 bg-theme-surface shadow-lg transition-transform duration-300 md:hidden flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-6 items-end px-8 pt-8">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={`text-theme-foreground border-b-2 border-b-transparent hover:border-b-theme-foreground border-solid py-1 cursor-pointer font-patrick text-2xl ${selectedSection === index ? "font-bold" : "font-normal"}`}
              onClick={() => handleClick(item.id, index)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex justify-end px-8 pb-8">{controls}</div>
      </div>
    </div>
  );
}
