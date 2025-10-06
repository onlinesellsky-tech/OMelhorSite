import { Shield } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

export default function Guarantee() {
  return (
    <section className="w-full bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <Card className="border border-card-border shadow-lg text-center relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-chart-2/5 via-transparent to-chart-2/10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <CardHeader className="relative z-10">
              <motion.div 
                className="flex items-center justify-center gap-2 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Shield className="h-8 w-8 text-chart-2" />
                <h2 className="font-heading font-bold text-2xl text-foreground">
                  Garantia Blindada de 7 Dias
                </h2>
              </motion.div>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Sem risco!</span> Explore toda a Sua Biblioteca por 7 dias.
                Se não amar, <span className="font-semibold text-primary">devolvemos 100% do seu dinheiro</span>. Simples assim.
              </p>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}