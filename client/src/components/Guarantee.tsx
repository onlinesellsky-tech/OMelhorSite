import { Shield } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Guarantee() {
  return (
    <section className="w-full bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="border border-card-border shadow-lg text-center">
          <CardHeader>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="h-8 w-8 text-chart-2" />
              <h2 className="font-heading font-bold text-2xl text-foreground">
                Garantia Blindada de 7 Dias
              </h2>
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Sem risco!</span> Explore toda a Livroteca por 7 dias.
              Se não amar, <span className="font-semibold text-primary">devolvemos 100% do seu dinheiro</span>. Simples assim.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}