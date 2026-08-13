import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DistrictMarquee } from "@/components/DistrictMarquee";
import { Catalog } from "@/components/Catalog";
import { Approach } from "@/components/Approach";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <DistrictMarquee />
      <Catalog />
      <Approach />
      <Contacts />
      <Footer />
    </main>
  );
}
