import ScrollAnimation from "./ScrollAnimation";
import testimonialsImage from "@assets/Fiquei com um pé atrás pelo preço, achei que seria algo incompleto. Mas arrisquei. Foi o melhor investimento de R$ 14,90 que já fiz na vida! Os livros são completos, a qualidade é perfeita e a sel_1761315986917.jpg";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-card py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-8">
            <img
              src={testimonialsImage}
              alt="Depoimentos de clientes satisfeitos"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl mb-8"
              data-testid="img-testimonials-section"
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}