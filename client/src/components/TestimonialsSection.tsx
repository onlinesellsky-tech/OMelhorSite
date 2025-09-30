import { Star } from "lucide-react";
import ScrollAnimation, { StaggeredAnimation, StaggeredItem } from "./ScrollAnimation";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-card py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Milhares de Leitores Já Estão se Desenvolvendo
            </h3>
          </div>
        </ScrollAnimation>
        
        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {/* Depoimento 1 */}
          <StaggeredItem>
            <div className="bg-background p-6 rounded-lg shadow-xl text-center space-y-4 border border-card-border">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" data-testid="star-rating" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                "Eu gastaria mais de R$ 500 para comprar só os 5 primeiros livros da lista. 
                Ter acesso a tudo isso por esse preço é simplesmente inacreditável. A melhor compra do ano!"
              </p>
              <div className="pt-2">
                <p className="font-semibold text-foreground text-sm">Mariana S.</p>
                <p className="text-muted-foreground text-xs">Empreendedora</p>
              </div>
            </div>
          </StaggeredItem>

          {/* Depoimento 2 */}
          <StaggeredItem>
            <div className="bg-background p-6 rounded-lg shadow-xl text-center space-y-4 border border-card-border">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" data-testid="star-rating" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                "A organização do material é perfeita. Com o planner, eu finalmente consegui criar 
                uma rotina de leitura e aplicar os conceitos na minha carreira. Já estou vendo resultados!"
              </p>
              <div className="pt-2">
                <p className="font-semibold text-foreground text-sm">Lucas F.</p>
                <p className="text-muted-foreground text-xs">Analista de Marketing</p>
              </div>
            </div>
          </StaggeredItem>

          {/* Depoimento 3 */}
          <StaggeredItem>
            <div className="bg-background p-6 rounded-lg shadow-xl text-center space-y-4 border border-card-border">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" data-testid="star-rating" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                "Eu sempre quis ter acesso a esse conhecimento, mas não sabia por onde começar. 
                A Sua Biblioteca foi o mapa que eu precisava. Os audiobooks são perfeitos para ouvir no trânsito."
              </p>
              <div className="pt-2">
                <p className="font-semibold text-foreground text-sm">Julia P.</p>
                <p className="text-muted-foreground text-xs">Estudante</p>
              </div>
            </div>
          </StaggeredItem>
        </StaggeredAnimation>
      </div>
    </section>
  );
}