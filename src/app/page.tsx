import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Mapa from "@/components/Home/Mapa";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Contact />
      <Mapa />
    </main>
  );
}
