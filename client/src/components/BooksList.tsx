import ScrollAnimation, { StaggeredAnimation, StaggeredItem } from "./ScrollAnimation";

export default function BooksList() {
  const books = [
    "A Arte da Guerra - Sun Tzu",
    "A Coragem de Ser Imperfeito - Brené Brown",
    "A Lei do Triunfo - Napoleon Hill",
    "A Lógica do Cisne Negro - Nassim Nicholas Taleb",
    "A Psicologia do Dinheiro - Morgan Housel",
    "A Sutil Arte de Ligar o F*da-Se - Mark Manson",
    "A Startup Enxuta - Eric Ries",
    "A Única Coisa - Gary Keller",
    "Ansiedade - Augusto Cury",
    "Antifrágil - Nassim Nicholas Taleb",
    "As 48 Leis do Poder - Robert Greene",
    "As Armas da Persuasão - Robert Cialdini",
    "Comunicação Não-Violenta - Marshall Rosenberg",
    "Como Fazer Amigos e Influenciar Pessoas - Dale Carnegie",
    "Desperte o Gigante Interior - Tony Robbins",
    "Disciplina é Destino - Ryan Holiday",
    "Essencialismo - Greg McKeown",
    "Foco - Daniel Goleman",
    "Hábitos Atômicos - James Clear",
    "Ikigai - Francesc Miralles e Héctor García",
    "Inteligência Emocional - Daniel Goleman",
    "Mais Esperto que o Diabo - Napoleon Hill",
    "Mais Rápido e Melhor - Charles Duhigg",
    "Meditações - Marco Aurélio",
    "Mindset - Carol S. Dweck",
    "O Homem Mais Rico da Babilônia - George S. Clason",
    "O Investidor Inteligente - Benjamin Graham",
    "O Jogo Interior de Tênis - W. Timothy Gallwey",
    "O Milagre da Manhã - Hal Elrod",
    "O Monge e o Executivo - James C. Hunter",
    "O Obstáculo é o Caminho - Ryan Holiday",
    "O Poder do Agora - Eckhart Tolle",
    "O Poder do Hábito - Charles Duhigg",
    "O Jeito Harvard de Ser Feliz - Shawn Achor",
    "Os 7 Hábitos das Pessoas Altamente Eficazes - Stephen Covey",
    "Os Segredos da Mente Milionária - T. Harv Eker",
    "Pai Rico, Pai Pobre - Robert Kiyosaki",
    "Poder Sem Limites - Tony Robbins",
    "Quem Pensa Enriquece - Napoleon Hill",
    "Rápido e Devagar - Daniel Kahneman",
    "Trabalhe 4 Horas por Semana - Timothy Ferriss"
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