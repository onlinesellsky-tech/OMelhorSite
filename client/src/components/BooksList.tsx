import ScrollAnimation, { StaggeredAnimation, StaggeredItem } from "./ScrollAnimation";

export default function BooksList() {
  const books = [
    "O Obstáculo é o Caminho",
    "Os Segredos da Mente Milionária",
    "Inteligência Emocional",
    "O Poder do Agora",
    "A Única Coisa",
    "A Arte da Guerra",
    "A Lei do Triunfo",
    "A Lógica do Cisne Negro",
    "A Psicologia do Dinheiro",
    "A Startup Enxuta",
    "Ansiedade",
    "Desperte o Gigante Interior",
    "Poder Sem Limites",
    "As Armas da Persuasão",
    "Como Fazer Amigos e Influenciar Pessoas",
    "A Coragem de Ser Imperfeito",
    "Foco",
    "Disciplina é Destino",
    "Comunicação Não-Violenta",
    "Essencialismo",
    "Hábitos Atômicos",
    "Ikigai",
    "Mais Esperto que o Diabo",
    "Mais Rápido e Melhor",
    "Meditações",
    "Mindset",
    "O Jeito Harvard de Ser Feliz",
    "O Investidor Inteligente",
    "O Poder do Hábito",
    "O Homem Mais Rico da Babilônia",
    "O Jogo Interior de Tênis",
    "O Milagre da Manhã",
    "Quem Pensa Enriquece",
    "Rápido e Devagar",
    "Trabalhe 4 Horas por Semana",
    "Os 7 Hábitos das Pessoas Altamente Eficazes",
    "Pai Rico, Pai Pobre",
    "A Sutil Arte de Ligar o F*da-Se",
    "Antifrágil",
    "O Monge e o Executivo"
  ];

  return (
    <section className="w-full bg-card py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Desbloqueie Acesso Imediato a Este Conhecimento
            </h2>
            <p className="text-lg text-muted-foreground">
              Sua Biblioteca inclui estes títulos transformadores em PDF{" "}
              <span className="text-primary font-semibold">
                (e 25 audiobooks exclusivos no pacote VIP)
              </span>
              :
            </p>
          </div>
        </ScrollAnimation>
        
        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerDelay={0.02}
        >
          {books.map((book, index) => (
            <StaggeredItem key={index}>
              <div
                className="bg-background border border-card-border rounded-lg p-4 hover-elevate transition-all duration-300 hover:shadow-lg"
                data-testid={`book-item-${index}`}
              >
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-semibold text-primary">{index + 1}.</span> {book}
                </p>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  );
}