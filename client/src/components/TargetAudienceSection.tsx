import { Rocket, BookOpen, TrendingUp } from "lucide-react";

export default function TargetAudienceSection() {
  return (
    <section className="w-full bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            Esta coleção foi feita para você que é...
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Empreendedor */}
          <div className="bg-card p-6 rounded-lg shadow-lg text-center space-y-4 border border-card-border hover-elevate">
            <div className="flex justify-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <Rocket className="h-8 w-8 text-primary" data-testid="icon-rocket" />
              </div>
            </div>
            <h4 className="font-bold text-lg text-foreground">
              Empreendedor ou Autônomo
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Buscando estratégias validadas para crescer seu negócio sem gastar uma fortuna.
            </p>
          </div>

          {/* Estudante */}
          <div className="bg-card p-6 rounded-lg shadow-lg text-center space-y-4 border border-card-border hover-elevate">
            <div className="flex justify-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" data-testid="icon-book" />
              </div>
            </div>
            <h4 className="font-bold text-lg text-foreground">
              Estudante ou Curioso
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Querendo acelerar o aprendizado com os maiores pensadores do mundo de forma organizada.
            </p>
          </div>

          {/* Profissional */}
          <div className="bg-card p-6 rounded-lg shadow-lg text-center space-y-4 border border-card-border hover-elevate">
            <div className="flex justify-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-primary" data-testid="icon-chart" />
              </div>
            </div>
            <h4 className="font-bold text-lg text-foreground">
              Profissional Ambicioso
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Procurando desenvolver novas habilidades (liderança, finanças, produtividade) para se destacar na carreira.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}