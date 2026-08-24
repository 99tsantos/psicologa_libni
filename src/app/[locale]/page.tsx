import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="w-full pt-24 lg:pt-0">
      <Hero />
      <Services />
      <AboutMe />
      <ContactMe />
    </main>
  );
}
