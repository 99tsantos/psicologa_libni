"use client";
import { useEffect, useState } from "react";
import CloseIcon from "./icons/CloseIcon";
import MenuIcon from "./icons/MenuIcon";

const NAVY_COLOR = "#232d3f";

const NAV_ITEMS = [
  { id: "hero", label: "Hola!" },
  { id: "services", label: "Servicios" },
  { id: "about-me", label: "Sobre mí" },
  { id: "contact-me", label: "Contactos" },
];

export default function Navbar() {
  const [selectedSection, setSelectedSection] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    let ticking = false;

    const updateActive = () => {
      const distances = ids.map((id) => {
        const el = document.getElementById(id);
        if (!el) return Infinity;
        return Math.abs(el.getBoundingClientRect().top);
      });
      const min = Math.min(...distances);
      const index = distances.indexOf(min);
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
    const windowWidth = window.innerWidth;
    const el = document.getElementById(id);
    if (el)
      el.scrollIntoView({
        behavior: "smooth",
        block: windowWidth < 1024 ? "start" : "end",
      });
    setSelectedSection(index);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full bg-opacity-1 bg-white fixed z-10 text-black flex justify-between items-center px-8 py-4">
      <div className="bg-[url('/assets/logo.png')] bg-cover bg-center w-10 h-10"></div>
      <div className="hidden md:block">
        <ul className="flex gap-4 md:gap-20 justify-end">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.id}
              className={`text-local-navy border-b-2 border-b-transparent hover:border-b-local-navy border-solid py-1 cursor-pointer font-patrick text-md lg:text-2xl ${
                selectedSection === i ? "font-bold" : "font-normal"
              }`}
              onClick={() => handleClick(item.id, i)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        aria-label={
          isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
        }
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        className="w-8 h-8 md:hidden cursor-pointer"
      >
        {isMenuOpen ? (
          <CloseIcon color={NAVY_COLOR} className="w-full h-full" />
        ) : (
          <MenuIcon color={NAVY_COLOR} className="w-full h-full" />
        )}
      </button>
      <div
        className={`fixed top-[72px] bottom-0 right-0 w-64 bg-white shadow-lg transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 items-end px-8 pt-8">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.id}
              className={`text-local-navy border-b-2 border-b-transparent hover:border-b-local-navy border-solid py-1 cursor-pointer font-patrick text-2xl ${
                selectedSection === i ? "font-bold" : "font-normal"
              }`}
              onClick={() => handleClick(item.id, i)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
