import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

export default function MainOffer() {
  const handleOfferClick = () => {
    console.log('Oferta Principal clicked - R$10');
  };

  return (
    <section id="offer-section" className="w-full bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <Card className="border border-card-border shadow-lg relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <CardHeader className="text-center relative z-10">
              <motion.div 
                className="flex items-center justify-center gap-2 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Gift className="h-6 w-6 text-primary" />
                <h3 className="font-heading font-bold text-2xl text-primary">
                  OFERTA IRRESISTÍVEL
                </h3>
              </motion.div>
              <p className="text-lg text-foreground">
                Leve agora +35 Ebooks Best-Sellers por um pagamento único de:
              </p>
            </CardHeader>
            
            <CardContent className="text-center space-y-6 relative z-10">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">De:</p>
                <p className="text-2xl text-muted-foreground line-through">R$ 397</p>
                <p className="text-sm text-muted-foreground">Por Apenas:</p>
                <motion.p 
                  className="text-5xl font-bold text-primary"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  R$ 10
                </motion.p>
              </div>
              
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={handleOfferClick}
                data-testid="button-offer-main"
              >
                GARANTIR MEUS 35 EBOOKS AGORA!
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Pagamento único, acesso para sempre.
              </p>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}