"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen bg-local-lightgrey overflow-auto">
      <section
        className="w-full h-full bg-gradient-to-b from-local-blue from-80% to-local-lightgrey to-100% flex flex-col md:flex-row justify-center items-center gap-4"
        id="hero"
      >
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl text-local-navy">Hola! Soy Libní Gonzaléz</h1>
          <p className="text-local-navy justify-normal w-[80%]">
            Bienvenido a mi página! Soy psicóloga clínica, egresada de la
            Universidad Mariano Gálvez de Guatemala desde el año 2022. Con
            colegiado activ (14470) por el Colegio de Psicólogos de Guatemala.
            Con formación y acreditaciones académicas en neuropsicologia y
            tomando la maestria de Neuropsicologia en la misma Universidad.
          </p>
        </div>
        <div
          title="Psicóloga Libní Gonzaléz"
          className="w-96 h-96 bg-[url('/assets/libnigonzalez.png')] bg-cover bg-center rounded-3xl"
        ></div>
      </section>
      <section
        className="bg-local-lightgrey text-local-navy w-full h-1/2 flex flex-col md:flex-row justify-center items-center gap-4"
        id="aboutme"
      >
        <div className="w-96 h-96 bg-[url('/assets/about-me.png')]"></div>
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl text-local-navy">Sobre mí...</h1>
          <p className="text-local-navy">
            Siempre me encuentro en constante aprendizaje, disfruto del proceso
            de entender la funcionalidad de las cosas. Me gusta la ciencia y el
            arte, así que continuamente estoy envuelta en actividades donde se
            involucren.
          </p>
        </div>
      </section>
      <section id="contact"></section>
    </div>
  );
}
