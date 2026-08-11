import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Hola!" },
  { id: "services", label: "Servicios" },
  { id: "about-me", label: "Sobre mí" },
  { id: "contact-me", label: "Contactos" },
];

export default function Navbar() {
  const [selectedSection, setSelectedSection] = useState<number>(0);

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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setSelectedSection(index);
  };

  return (
    <div className="w-full bg-opacity-1 bg-white absolute top-0 text-black flex justify-between items-center px-8 py-4">
      <div className="bg-[url('/assets/logo.png')] bg-cover bg-center w-10 h-10"></div>
      <div>
        <ul className="flex gap-4 md:gap-20 justify-end">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.id}
              className={`cursor-pointer font-patrick text-md lg:text-2xl ${
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
