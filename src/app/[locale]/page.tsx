import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Sessions from "@/components/Sessions";

export default function Home() {
  return (
    <main className="w-full pt-24 lg:pt-0">
      <Hero />
      <Services />
      <Sessions />
      <AboutMe />
      <ContactMe />
    </main>
  );
}
