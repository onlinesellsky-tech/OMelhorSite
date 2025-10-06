import ScrollAnimation from "./ScrollAnimation";

export default function ValueSection() {
  return (
    <section className="w-full bg-card py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollAnimation>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
            Conhecimento de Milhões, Acessível para Você
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
            Chega de buscar informações soltas. Tenha acesso organizado aos maiores best-sellers sobre{" "}
            <span className="font-semibold text-foreground">finanças, hábitos, produtividade e negócios</span>.
            Transforme sua vida e carreira com uma biblioteca que vale muito, por um investimento mínimo.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.4}>
          <p className="text-primary font-semibold text-lg">
            Sua jornada de sucesso começa agora.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}