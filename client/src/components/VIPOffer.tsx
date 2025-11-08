import { Check, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";
import vipDevicesImage from "@assets/generated_images/VIP_package_devices_mockup_8afce211.png";

export default function VIPOffer() {
  const handleVIPClick = () => {
    window.location.href = 'https://pay.kirvano.com/b2154357-2826-4813-99f2-e0b20b59a226';
  };

  return (
    <section className="w-full bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-orange-500/10"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <CardHeader className="text-center relative z-10">
              <motion.div 
                className="flex items-center justify-center gap-2 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2">
                  <Flame className="h-5 w-5" />
                  <span className="font-bold text-sm sm:text-base">OFERTA COMPLETA VIP</span>
                  <Flame className="h-5 w-5" />
                </div>
              </motion.div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-2">
                Quer acelerar seus resultados e aprender de forma completa?
              </h3>
              <p className="text-base sm:text-lg text-foreground">
                Por apenas mais R$14,90, leve tudo:
              </p>
            </CardHeader>
            
            <CardContent className="px-4 sm:px-6 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 space-y-6 w-full">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-chart-2 mt-1 flex-shrink-0" />
                      <span className="text-foreground text-sm sm:text-base">
                        <strong>+40 Ebooks Best-Sellers</strong>
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-chart-2 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <span className="text-foreground text-sm sm:text-base">
                          <strong>+25 Audiobooks Exclusivos:</strong>
                        </span>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          Aprenda em qualquer lugar, otimizando seu tempo.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-chart-2 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <span className="text-foreground text-sm sm:text-base">
                          <strong>+Planner de Estudo (Digital e Imprimível):</strong>
                        </span>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          Transforme conhecimento em ação e resultados concretos.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Valor Total:</p>
                      <p className="text-xl sm:text-2xl text-muted-foreground line-through">R$ 597</p>
                      <p className="text-sm text-muted-foreground">Leve TUDO por Apenas:</p>
                      <motion.p 
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary"
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        R$ 24,90
                      </motion.p>
                    </div>
                    
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs sm:text-sm md:text-base py-4 px-3 sm:px-4 md:px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl leading-tight whitespace-normal h-auto min-h-[3rem]"
                      onClick={handleVIPClick}
                      data-testid="button-vip-offer"
                    >
                      QUERO O PACOTE COMPLETO POR R$24,90!
                    </Button>
                    
                    <p className="text-sm text-primary font-semibold text-center">
                      Acesso vitalício a todo o material. A melhor escolha!
                    </p>
                  </div>
                </div>
                
                <motion.div 
                  className="flex-1 flex justify-center w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={vipDevicesImage}
                    alt="Tablet, smartphone e fones - Pacote VIP"
                    className="w-full max-w-md rounded-lg shadow-lg"
                    loading="lazy"
                    width="600"
                    height="500"
                    data-testid="img-vip-devices"
                  />
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
