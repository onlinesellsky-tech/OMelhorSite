import { TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function ValueAnchor() {
  return (
    <section className="w-full bg-background py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-2 border-primary bg-gradient-to-r from-primary/10 via-primary/5 to-orange-500/10 shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-6 w-6 text-primary" />
                  <div className="text-center sm:text-left">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Valor real se comprado individualmente:
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-foreground line-through">
                      R$ 997,00
                    </p>
                  </div>
                </div>
                
                <div className="hidden sm:block text-2xl text-primary font-bold">
                  →
                </div>
                <div className="block sm:hidden text-2xl text-primary font-bold">
                  ↓
                </div>
                
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Hoje, apenas:
                  </p>
                  <motion.p
                    className="text-3xl sm:text-4xl font-bold text-primary"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    data-testid="value-anchor-price"
                  >
                    R$ 10,00
                  </motion.p>
                  <p className="text-xs sm:text-sm font-semibold text-chart-2">
                    97% de desconto!
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
