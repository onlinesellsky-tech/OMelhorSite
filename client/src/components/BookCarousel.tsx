import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import cover1 from "@assets/2_1761314026453.jpg";
import cover2 from "@assets/3c3722fb-8fe4-474d-aacb-cd432e8b25a9_1761314026457.png";
import cover3 from "@assets/61Rlw3cPpsL._UF1000,1000_QL80__1761314026458.jpg";
import cover4 from "@assets/61rRRbfINJL._UF1000,1000_QL80__1761314026459.jpg";
import cover5 from "@assets/71f9R8hY23L_1761314026459.jpg";
import cover6 from "@assets/71tYBWz6VEL._UF1000,1000_QL80__1761314026460.jpg";
import cover7 from "@assets/71uFdKI9jtL._UF894,1000_QL80__1761314026461.jpg";
import cover8 from "@assets/71V4lNR2gKL_1761314026461.jpg";
import cover9 from "@assets/71XoEZS6W+L._UF1000,1000_QL80__1761314026462.jpg";
import cover10 from "@assets/91kurpsVErL._UF894,1000_QL80__1761314026462.jpg";
import cover11 from "@assets/b7b6433b-5054-4314-967a-488d65a165d7_1761314026463.png";
import cover12 from "@assets/c9c8fa6ea8e8dde41cc3a21639c6d0ba_1761314026464.webp";
import cover13 from "@assets/e02189c4-e0bd-46c4-b8ba-8320b3d029a9_1761314026464.png";
import cover14 from "@assets/eb1311b5bf058ff829d2d7037bacb429_1761314026465.webp";
import cover15 from "@assets/images (1)_1761314026465.jpg";
import cover16 from "@assets/images (4)_1761314026466.jpg";
import cover17 from "@assets/images (5)_1761314026466.jpg";
import cover18 from "@assets/images_1761314026467.jpg";
import cover19 from "@assets/OIP (1)_1761314026468.jpg";
import cover20 from "@assets/OIP (1)_1761314026468.webp";

export default function BookCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
  });
  
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      if (!isPaused && emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const bookCovers = [
    {
      title: "O Obstáculo é o Caminho",
      author: "Ryan Holiday",
      image: cover1
    },
    {
      title: "O Ego é Seu Inimigo",
      author: "Ryan Holiday",
      image: cover2
    },
    {
      title: "Disciplina é Destino",
      author: "Ryan Holiday",
      image: cover3
    },
    {
      title: "A Coragem de Ser Imperfeito",
      author: "Brené Brown",
      image: cover4
    },
    {
      title: "Inteligência Emocional",
      author: "Daniel Goleman",
      image: cover5
    },
    {
      title: "Essencialismo",
      author: "Greg McKeown",
      image: cover6
    },
    {
      title: "Foco",
      author: "Daniel Goleman",
      image: cover7
    },
    {
      title: "Pai Rico, Pai Pobre",
      author: "Robert Kiyosaki",
      image: cover8
    },
    {
      title: "A Lógica do Cisne Negro",
      author: "Nassim Taleb",
      image: cover9
    },
    {
      title: "A Lei do Triunfo",
      author: "Napoleon Hill",
      image: cover10
    },
    {
      title: "Mais Rápido e Melhor",
      author: "Charles Duhigg",
      image: cover11
    },
    {
      title: "Rápido e Devagar",
      author: "Daniel Kahneman",
      image: cover12
    },
    {
      title: "O Jogo Interior de Tênis",
      author: "W. Timothy Gallwey",
      image: cover13
    },
    {
      title: "O Milagre da Manhã",
      author: "Hal Elrod",
      image: cover14
    },
    {
      title: "O Poder do Agora",
      author: "Eckhart Tolle",
      image: cover15
    },
    {
      title: "Desperte Seu Gigante Interior",
      author: "Anthony Robbins",
      image: cover16
    },
    {
      title: "Poder Sem Limites",
      author: "Anthony Robbins",
      image: cover17
    },
    {
      title: "Os Segredos da Mente Milionária",
      author: "T. Harv Eker",
      image: cover18
    },
    {
      title: "Quem Pensa Enriquece",
      author: "Napoleon Hill",
      image: cover19
    },
    {
      title: "Mindset",
      author: "Carol Dweck",
      image: cover20
    }
  ];

  return (
    <section className="w-full bg-card py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            Explore Nossa Coleção de Best-Sellers
          </h2>
          <p className="text-lg text-muted-foreground">
            +40 livros que transformaram milhões de vidas ao redor do mundo
          </p>
        </motion.div>

        <div className="relative">
          <div 
            className="overflow-hidden" 
            ref={emblaRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
          >
            <div className="flex gap-4 md:gap-6">
              {bookCovers.map((book, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_200px] sm:flex-[0_0_250px] md:flex-[0_0_280px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className="relative w-full aspect-[2/3] rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
                    data-testid={`book-cover-${index}`}
                  >
                    <img
                      src={book.image}
                      alt={`Capa do livro ${book.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    <div className="absolute top-2 right-2 bg-primary/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <span className="text-primary-foreground text-xs font-semibold">EBOOK</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background hover:bg-accent border-2 shadow-lg z-10 h-12 w-12"
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background hover:bg-accent border-2 shadow-lg z-10 h-12 w-12"
              data-testid="button-carousel-next"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Deslize para ver mais títulos →
        </motion.p>
      </div>
    </section>
  );
}
