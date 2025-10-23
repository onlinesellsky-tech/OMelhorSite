import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await fetch('https://formsubmit.co/suporte@suabiblioteca.shop', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Sucesso! 🎉",
          description: "Em breve você receberá sua amostra grátis no email.",
        });
        setEmail("");
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch (error) {
      toast({
        title: "Ops!",
        description: "Houve um erro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-4"
          >
            <Sparkles className="h-10 w-10 text-primary mx-auto" />
          </motion.div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Entre para a Lista VIP
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Receba uma <span className="font-semibold text-primary">amostra grátis</span> e desbloqueie conteúdo exclusivo
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-background rounded-2xl shadow-lg p-2 border-2 border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <motion.label
                  htmlFor="email-input"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    isFocused || email
                      ? "top-2 text-xs text-primary font-semibold"
                      : "top-1/2 -translate-y-1/2 text-base text-muted-foreground"
                  }`}
                  animate={isFocused || email ? { y: 0 } : {}}
                >
                  {isFocused || email ? "Seu melhor e-mail" : ""}
                </motion.label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={isFocused || email ? "" : "Digite seu e-mail aqui"}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
                    data-testid="input-email-capture"
                  />
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl disabled:opacity-50"
                  data-testid="button-email-submit"
                >
                  {isSubmitting ? "Enviando..." : "Quero Minha Amostra!"}
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground mt-3"
          >
            🔒 Seus dados estão seguros. Sem spam, apenas conteúdo de valor.
          </motion.p>
        </motion.form>
      </div>
    </section>
  );
}
