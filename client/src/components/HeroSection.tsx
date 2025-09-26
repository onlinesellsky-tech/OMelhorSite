import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ebookStackImage from "@assets/generated_images/3D_ebook_stack_mockup_ba262e51.png";
import smartphoneImage from "@assets/generated_images/Smartphone_ebook_interface_mockup_a29bb8a0.png";

export default function HeroSection() {
  const handleCTAClick = () => {
    console.log('CTA Principal clicked - R$10');
    // Scroll to offer section
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              ACESSO IMEDIATO A UMA BIBLIOTECA QUE VALE{" "}
              <span className="text-primary">MILHARES DE REAIS</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed px-2 sm:px-0">
              Desbloqueie <span className="font-semibold text-foreground">+35 dos livros</span> mais importantes do mundo,
              no formato ebook, pelo <span className="font-semibold text-primary">preço de um café</span>.
            </p>
            
            <Button
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-4 sm:px-8 py-4 rounded-lg shadow-md mb-6"
              onClick={handleCTAClick}
              data-testid="button-cta-hero"
            >
              QUERO MEU ACESSO IMEDIATO A R$10
            </Button>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="h-5 w-5 text-chart-2" />
                <span className="text-sm sm:text-base text-foreground">Acesso vitalício</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="h-5 w-5 text-chart-2" />
                <span className="text-sm sm:text-base text-foreground">Leitura em qualquer dispositivo</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="h-5 w-5 text-chart-2" />
                <span className="text-sm sm:text-base text-foreground">Download instantâneo</span>
              </div>
            </div>
          </div>
          
          {/* Visual Elements */}
          <div className="flex-1 flex flex-col items-center space-y-6">
            <div className="relative">
              <img
                src={ebookStackImage}
                alt="Pilha de ebooks best-sellers"
                className="w-full max-w-md rounded-lg shadow-lg"
                data-testid="img-ebook-stack"
              />
            </div>
            <div className="relative">
              <img
                src={smartphoneImage}
                alt="Smartphones com interface de ebooks"
                className="w-full max-w-sm rounded-lg shadow-md"
                data-testid="img-smartphones"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}