"use client";
import { useState } from "react";

export default function Navbar() {
  const [selectedSection, setSelectedSection] = useState<number>(0);
  return (
    <div className="w-full h-10 bg-opacity-1 fixed text-black flex justify-between p-8">
      <div className="bg-[url('/assets/logo.png')] bg-cover bg-center w-10 h-10"></div>
      <div>
        <ul className="flex gap-4 md:gap-20 justify-end">
          <li className={selectedSection === 0 ? "font-bold" : "font-normal"}>
            Hola!
          </li>
          <li>Servicios</li>
          <li>Sobre mí</li>
          <li>Contactos</li>
        </ul>
      </div>
    </div>
  );
}
