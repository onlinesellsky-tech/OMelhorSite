export default function BooksList() {
  const books = [
    "Os Sete Hábitos das Pessoas Altamente Eficazes – Stephen Covey",
    "Pai Rico, Pai Pobre – Robert Kiyosaki",
    "O Poder do Hábito – Charles Duhigg",
    "Mindset: A Nova Psicologia do Sucesso – Carol S. Dweck",
    "Inteligência Emocional – Daniel Goleman",
    "O Poder do Agora – Eckhart Tolle",
    "Mais Esperto que o Diabo – Napoleon Hill",
    "Os Segredos da Mente Milionária – T. Harv Eker",
    "Quem Pensa Enriquece – Napoleon Hill",
    "A Única Coisa – Gary Keller",
    "O Monge e o Executivo – James C. Hunter",
    "A Arte da Guerra – Sun Tzu",
    "Antifrágil – Nassim Taleb",
    "Rápido e Devagar – Daniel Kahneman",
    "A Lógica do Cisne Negro – Nassim Taleb",
    "Trabalhe 4 Horas por Semana – Timothy Ferriss",
    "O Homem Mais Rico da Babilônia – George S. Clason",
    "O Obstáculo é o Caminho – Ryan Holiday",
    "A Lei do Triunfo – Napoleon Hill",
    "Desperte o Gigante Interior – Anthony Robbins",
    "Poder Sem Limites – Anthony Robbins",
    "Essencialismo – Greg McKeown",
    "A Coragem de Ser Imperfeito – Brené Brown",
    "CNV – Comunicação Não Violenta – Marshall Rosenberg",
    "As Armas da Persuasão – Robert Cialdini",
    "A Startup Enxuta – Eric Ries",
    "Ansiedade: Como Enfrentar o Mal do Século – Augusto Cury",
    "Foco – Daniel Goleman",
    "Mais Rápido, Melhor – Charles Duhigg",
    "O Ego é Seu Inimigo – Ryan Holiday",
    "O Jogo Interior de Tênis – W. Timothy Gallwey",
    "O Milagre do Amanhã – Hal Elrod",
    "Disciplina é Destino – Ryan Holiday",
    "Meditações – Marco Aurélio",
    "Hábitos Atômicos – James Clear",
    "Arrume a Sua Cama – William H. McRaven",
    "O Jeito Harvard de Ser Feliz – Shawn Achor"
  ];

  return (
    <section className="w-full bg-card py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            Desbloqueie Acesso Imediato a Este Conhecimento
          </h2>
          <p className="text-lg text-muted-foreground">
            Sua Biblioteca inclui estes títulos transformadores em PDF{" "}
            <span className="text-primary font-semibold">
              (e 10 audiobooks exclusivos no pacote VIP)
            </span>
            :
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-background border border-card-border rounded-lg p-4 hover-elevate"
              data-testid={`book-item-${index}`}
            >
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold text-primary">{index + 1}.</span> {book}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}