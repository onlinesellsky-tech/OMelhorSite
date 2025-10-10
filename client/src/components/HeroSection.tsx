import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ebookStackImage from "@assets/Gemini_Generated_Image_c1wtyc1wtyc1wtyc_1760038467597.png";
import smartphoneImage from "@assets/Gemini_Generated_Image_n61ioln61ioln61i_1760038467596.png";

export default function HeroSection() {
  const handleCTAClick = () => {
    console.log('CTA Principal clicked - R$10');
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-background py-8 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ACESSO IMEDIATO A UMA BIBLIOTECA QUE VALE{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">MILHARES DE REAIS</span>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desbloqueie <span className="font-semibold text-foreground">+35 dos livros</span> mais importantes do mundo,
              no formato ebook, pelo <span className="font-semibold text-primary">preço de um café</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-4 sm:px-8 py-4 rounded-lg shadow-md mb-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={handleCTAClick}
                data-testid="button-cta-hero"
              >
                QUERO MEU ACESSO IMEDIATO A R$10
              </Button>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                "Acesso vitalício",
                "Leitura em qualquer dispositivo",
                "Download instantâneo"
              ].map((text, index) => (
                <motion.div
                  key={text}
                  className="flex items-center justify-center lg:justify-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <Check className="h-5 w-5 text-chart-2" />
                  <span className="text-sm sm:text-base text-foreground">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative w-full max-w-xs"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={ebookStackImage}
                alt="Pilha de ebooks best-sellers"
                className="w-full h-48 object-cover rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                data-testid="img-ebook-stack"
              />
            </motion.div>
            <motion.div 
              className="relative w-full max-w-xs"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={smartphoneImage}
                alt="Smartphones com interface de ebooks"
                className="w-full h-48 object-cover rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                data-testid="img-smartphones"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}