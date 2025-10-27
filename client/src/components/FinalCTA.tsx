import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const handleEssentialClick = () => {
    window.location.href = 'https://pay.kirvano.com/06d39040-379a-4a75-9d3f-be545106e48e';
  };

  const handleVIPClick = () => {
    window.location.href = 'https://pay.kirvano.com/b2154357-2826-4813-99f2-e0b20b59a226';
  };

  return (
    <section className="w-full bg-card py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Pronto para começar? Escolha seu acesso:
            </h2>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScrollAnimation delay={0.2} direction="left">
            <Card className="border border-card-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <h3 className="font-heading font-bold text-xl text-foreground">
                  Pacote Essencial
                </h3>
              </CardHeader>
              
              <CardContent className="text-center space-y-6">
                <div className="space-y-2">
                  <p className="text-foreground">+40 Ebooks</p>
                  <p className="text-muted-foreground">Acesso Vitalício</p>
                  <p className="text-3xl sm:text-4xl font-bold text-primary">R$ 10</p>
                </div>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full font-bold text-xs sm:text-sm lg:text-base py-3 px-2 sm:px-4 transition-all duration-300 hover:scale-105 leading-tight"
                  onClick={handleEssentialClick}
                  data-testid="button-essential-package"
                >
                  SIM! QUERO DESBLOQUEAR MINHA BIBLIOTECA POR R$10
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.4} direction="right">
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl relative hover:shadow-2xl transition-shadow duration-300">
              <motion.div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  RECOMENDADO
                </div>
              </motion.div>
              
              <CardHeader className="text-center pt-8">
                <h3 className="font-heading font-bold text-xl text-foreground">
                  Pacote Completo VIP
                </h3>
              </CardHeader>
              
              <CardContent className="text-center space-y-6">
                <div className="space-y-2">
                  <p className="text-foreground">+40 Ebooks</p>
                  <p className="text-foreground">+25 Audiobooks</p>
                  <p className="text-foreground">+Planner de Estudo</p>
                  <p className="text-muted-foreground">Acesso Vitalício</p>
                  <motion.p 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    R$ 24,90
                  </motion.p>
                </div>
                
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-base lg:text-lg py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={handleVIPClick}
                  data-testid="button-vip-package"
                >
                  QUERO O PACOTE COMPLETO!
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}