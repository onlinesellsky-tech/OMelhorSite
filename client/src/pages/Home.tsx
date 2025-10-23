import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EmailCapture from "@/components/EmailCapture";
import ValueSection from "@/components/ValueSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import MainOffer from "@/components/MainOffer";
import VIPOffer from "@/components/VIPOffer";
import BookCarousel from "@/components/BookCarousel";
import BooksList from "@/components/BooksList";
import TestimonialsSection from "@/components/TestimonialsSection";
import Guarantee from "@/components/Guarantee";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EmailCapture />
        <ValueSection />
        <BookCarousel />
        <TargetAudienceSection />
        <MainOffer />
        <VIPOffer />
        <BooksList />
        <TestimonialsSection />
        <Guarantee />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}