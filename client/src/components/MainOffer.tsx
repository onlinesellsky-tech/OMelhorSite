import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function MainOffer() {
  const handleOfferClick = () => {
    console.log('Oferta Principal clicked - R$10');
    // Handle purchase logic
  };

  return (
    <section id="offer-section" className="w-full bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="border border-card-border shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="h-6 w-6 text-primary" />
              <h3 className="font-heading font-bold text-2xl text-primary">
                OFERTA IRRESISTÍVEL
              </h3>
            </div>
            <p className="text-lg text-foreground">
              Leve agora +35 Ebooks Best-Sellers por um pagamento único de:
            </p>
          </CardHeader>
          
          <CardContent className="text-center space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">De:</p>
              <p className="text-2xl text-muted-foreground line-through">R$ 397</p>
              <p className="text-sm text-muted-foreground">Por Apenas:</p>
              <p className="text-5xl font-bold text-primary">R$ 10</p>
            </div>
            
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-4 rounded-lg shadow-md"
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
      </div>
    </section>
  );
}