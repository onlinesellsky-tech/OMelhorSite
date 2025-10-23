import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-muted py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 Mentalidade Elite  Todos os direitos reservados.
          </div>
          
          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <a 
              href="#termos" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Termos de Uso e Direitos Autorais
            </a>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:suporte@mentalidadeelite.com" 
                className="hover:text-foreground transition-colors"
                data-testid="link-support-email"
              >
                suporte@mentalidadeelite.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}