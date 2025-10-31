import { CheckCircle2, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function Obrigado() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="text-center">
          <CardContent className="pt-12 pb-12 px-6">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                <CheckCircle2 className="w-24 h-24 text-primary relative" strokeWidth={1.5} />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-thank-you-title">
              Obrigado pela sua compra!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-order-confirmation">
              Seu pedido foi confirmado com sucesso
            </p>

            <div className="bg-accent/50 rounded-md p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="text-lg font-semibold text-foreground" data-testid="text-ebooks-sent-title">
                  Seus ebooks já foram enviados!
                </h2>
              </div>
              <p className="text-muted-foreground" data-testid="text-ebooks-delivery-message">
                Os ebooks foram entregues no email que você forneceu durante a compra.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1" data-testid="text-step-1-title">Verifique sua caixa de entrada</h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-step-1-description">
                    Procure por um email com o assunto contendo seus ebooks
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1" data-testid="text-step-2-title">Não encontrou?</h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-step-2-description">
                    Verifique a pasta de spam ou promoções. Às vezes os emails podem parar lá.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1" data-testid="text-step-3-title">Aproveite sua leitura</h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-step-3-description">
                    Faça o download dos ebooks e comece sua jornada de aprendizado!
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-support-message">
                Precisa de ajuda? Entre em contato conosco através do suporte.
              </p>
              <Link href="/" data-testid="link-home">
                <Button size="lg" variant="default" className="gap-2" data-testid="button-home">
                  <Home className="w-4 h-4" />
                  Voltar para a página inicial
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
