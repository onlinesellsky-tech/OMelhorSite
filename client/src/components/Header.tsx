import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookLogo from "@/assets/book-logo.png";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-border px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md overflow-hidden">
            <img src={bookLogo} alt="Livroteca Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-heading font-bold text-lg text-foreground">
            Sua Biblioteca +35 Ebooks
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-sobre">
            Sobre
          </a>
          <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-depoimentos">
            Depoimentos
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-faq">
            FAQ
          </a>
          <Button size="icon" variant="ghost" data-testid="button-search">
            <Search className="h-4 w-4" />
          </Button>
          <ThemeToggle />
        </nav>
        
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button size="icon" variant="ghost" data-testid="button-menu">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}