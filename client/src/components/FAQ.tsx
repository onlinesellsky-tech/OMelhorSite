import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Como recebo o material?",
      answer: "Acesso imediato via e-mail após a compra."
    },
    {
      question: "O pagamento é único?",
      answer: "Sim, 100% único, sem mensalidades."
    },
    {
      question: "Posso ler em qualquer dispositivo?",
      answer: "Sim, PDFs compatíveis com todos os dispositivos."
    },
    {
      question: "É seguro comprar aqui?",
      answer: "Sim, pagamento via plataforma segura com criptografia SSL."
    },
    {
      question: "Acesso vitalício?",
      answer: "Sim, você baixa o conteúdo e ele é seu para sempre."
    }
  ];

  return (
    <section id="faq" className="w-full bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
            Perguntas Frequentes
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
              <AccordionTrigger className="font-semibold text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}