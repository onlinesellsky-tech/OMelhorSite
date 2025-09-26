import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import MainOffer from "@/components/MainOffer";
import VIPOffer from "@/components/VIPOffer";
import BooksList from "@/components/BooksList";
import Guarantee from "@/components/Guarantee";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueSection />
        <MainOffer />
        <VIPOffer />
        <BooksList />
        <Guarantee />
        <FinalCTA />
        <FAQ />
      </main>
    </div>
  );
}