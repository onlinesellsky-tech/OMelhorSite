import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function FinalCTA() {
  const handleEssentialClick = () => {
    console.log('Pacote Essencial clicked - R$10');
    // Handle essential package purchase
  };

  const handleVIPClick = () => {
    console.log('Pacote VIP clicked - R$17');
    // Handle VIP package purchase
  };

  return (
    <section className="w-full bg-card py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            Pronto para começar? Escolha seu acesso:
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pacote Essencial */}
          <Card className="border border-card-border shadow-lg">
            <CardHeader className="text-center">
              <h3 className="font-heading font-bold text-xl text-foreground">
                Pacote Essencial
              </h3>
            </CardHeader>
            
            <CardContent className="text-center space-y-6">
              <div className="space-y-2">
                <p className="text-foreground">+35 Ebooks</p>
                <p className="text-muted-foreground">Acesso Vitalício</p>
                <p className="text-4xl font-bold text-primary">R$ 10</p>
              </div>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full font-bold text-lg py-3"
                onClick={handleEssentialClick}
                data-testid="button-essential-package"
              >
                QUERO SÓ OS EBOOKS
              </Button>
            </CardContent>
          </Card>
          
          {/* Pacote VIP */}
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                RECOMENDADO
              </div>
            </div>
            
            <CardHeader className="text-center pt-8">
              <h3 className="font-heading font-bold text-xl text-foreground">
                Pacote Completo VIP
              </h3>
            </CardHeader>
            
            <CardContent className="text-center space-y-6">
              <div className="space-y-2">
                <p className="text-foreground">+35 Ebooks</p>
                <p className="text-foreground">+20 Audiobooks</p>
                <p className="text-foreground">+Planner de Estudo</p>
                <p className="text-muted-foreground">Acesso Vitalício</p>
                <p className="text-5xl font-bold text-primary">R$ 17</p>
              </div>
              
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-3"
                onClick={handleVIPClick}
                data-testid="button-vip-package"
              >
                QUERO O PACOTE COMPLETO AGORA!
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}