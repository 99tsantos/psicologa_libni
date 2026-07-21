"use client";

import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="w-full">
      <Hero />
      {/* <Services />
      <AboutMe />
      <ContactMe /> */}
    </main>
  );
}
