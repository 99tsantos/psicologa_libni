"use client";

import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Services from "@/components/Services";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="w-full pt-24 lg:pt-0">
      <Hero />
      <Services />
      <AboutMe />
      <ContactMe />
    </main>
  );
}
