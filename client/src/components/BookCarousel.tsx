import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      title: "Hábitos Atômicos",
      author: "James Clear",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Pai Rico, Pai Pobre",
      author: "Robert Kiyosaki",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "O Poder do Hábito",
      author: "Charles Duhigg",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Mindset",
      author: "Carol Dweck",
      color: "from-red-500 to-red-700"
    },
    {
      title: "Essencialismo",
      author: "Greg McKeown",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      title: "A Única Coisa",
      author: "Gary Keller",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Antifrágil",
      author: "Nassim Taleb",
      color: "from-pink-500 to-pink-700"
    },
    {
      title: "Foco",
      author: "Daniel Goleman",
      color: "from-teal-500 to-teal-700"
    },
    {
      title: "O Ego é Seu Inimigo",
      author: "Ryan Holiday",
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "Quem Pensa Enriquece",
      author: "Napoleon Hill",
      color: "from-cyan-500 to-cyan-700"
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className={`relative w-full aspect-[2/3] bg-gradient-to-br ${book.color} rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]`}
                    data-testid={`book-cover-${index}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <h3 className="text-white font-heading font-bold text-base sm:text-lg md:text-xl mb-1 leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm">
                        {book.author}
                      </p>
                    </div>

                    <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <span className="text-white text-xs font-semibold">EBOOK</span>
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
