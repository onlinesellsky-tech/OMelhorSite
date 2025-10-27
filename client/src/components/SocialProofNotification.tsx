import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const allNotifications = [
  { name: "Maria S.", location: "São Paulo", time: "2 minutos atrás" },
  { name: "João P.", location: "Rio de Janeiro", time: "5 minutos atrás" },
  { name: "Ana C.", location: "Belo Horizonte", time: "3 minutos atrás" },
  { name: "Carlos M.", location: "Curitiba", time: "7 minutos atrás" },
  { name: "Juliana L.", location: "Porto Alegre", time: "4 minutos atrás" },
  { name: "Roberto F.", location: "Brasília", time: "6 minutos atrás" },
  { name: "Patricia R.", location: "Fortaleza", time: "1 minuto atrás" },
  { name: "Fernando A.", location: "Salvador", time: "9 minutos atrás" },
  { name: "Camila T.", location: "Recife", time: "3 minutos atrás" },
  { name: "Lucas B.", location: "Manaus", time: "5 minutos atrás" },
  { name: "Fernanda M.", location: "Campinas", time: "2 minutos atrás" },
  { name: "Rafael G.", location: "Santos", time: "8 minutos atrás" },
  { name: "Beatriz N.", location: "Florianópolis", time: "4 minutos atrás" },
  { name: "Gustavo H.", location: "Goiânia", time: "6 minutos atrás" },
  { name: "Amanda K.", location: "São Luís", time: "7 minutos atrás" },
  { name: "Rodrigo D.", location: "Vitória", time: "3 minutos atrás" },
  { name: "Mariana V.", location: "Natal", time: "5 minutos atrás" },
  { name: "Thiago O.", location: "João Pessoa", time: "2 minutos atrás" },
  { name: "Larissa W.", location: "Maceió", time: "4 minutos atrás" },
  { name: "Bruno E.", location: "Teresina", time: "6 minutos atrás" },
  { name: "Renata Q.", location: "Campo Grande", time: "8 minutos atrás" },
  { name: "Diego X.", location: "Cuiabá", time: "3 minutos atrás" },
  { name: "Vanessa Y.", location: "Ribeirão Preto", time: "5 minutos atrás" },
  { name: "Marcelo Z.", location: "Sorocaba", time: "7 minutos atrás" },
  { name: "Gabriela I.", location: "Uberlândia", time: "2 minutos atrás" },
  { name: "André J.", location: "Londrina", time: "4 minutos atrás" },
  { name: "Priscila U.", location: "Joinville", time: "9 minutos atrás" },
  { name: "Felipe L.", location: "Niterói", time: "3 minutos atrás" },
  { name: "Tatiana P.", location: "São José dos Campos", time: "6 minutos atrás" },
  { name: "Vinicius R.", location: "Aracaju", time: "5 minutos atrás" },
  { name: "Carolina S.", location: "Belém", time: "4 minutos atrás" },
  { name: "Henrique T.", location: "Blumenau", time: "7 minutos atrás" },
  { name: "Isabela F.", location: "Caxias do Sul", time: "2 minutos atrás" },
  { name: "Leonardo V.", location: "Pelotas", time: "8 minutos atrás" },
  { name: "Aline M.", location: "Maringá", time: "3 minutos atrás" },
  { name: "Marcos A.", location: "Jundiaí", time: "5 minutos atrás" },
  { name: "Natália B.", location: "Piracicaba", time: "6 minutos atrás" },
  { name: "Paulo C.", location: "Bauru", time: "4 minutos atrás" },
  { name: "Simone D.", location: "Franca", time: "7 minutos atrás" },
  { name: "Eduardo E.", location: "Limeira", time: "2 minutos atrás" },
  { name: "Cristina G.", location: "Guarulhos", time: "5 minutos atrás" },
  { name: "Fábio H.", location: "Osasco", time: "3 minutos atrás" },
  { name: "Daniela K.", location: "Santo André", time: "8 minutos atrás" },
  { name: "Alessandra N.", location: "São Bernardo", time: "4 minutos atrás" },
  { name: "Ricardo O.", location: "Mauá", time: "6 minutos atrás" },
  { name: "Bianca Q.", location: "Diadema", time: "2 minutos atrás" },
  { name: "Márcio W.", location: "Carapicuíba", time: "7 minutos atrás" },
  { name: "Viviane X.", location: "Itaquaquecetuba", time: "5 minutos atrás" },
  { name: "Claudio Y.", location: "Suzano", time: "3 minutos atrás" },
  { name: "Elaine Z.", location: "Taboão da Serra", time: "9 minutos atrás" },
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function SocialProofNotification() {
  const [notifications, setNotifications] = useState(() => shuffleArray(allNotifications));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;
    
    const showNotification = () => {
      setIsVisible(true);
      hideTimeout = setTimeout(() => setIsVisible(false), 4000);
    };

    const initialDelay = setTimeout(showNotification, 3000);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= notifications.length) {
          setNotifications(shuffleArray(allNotifications));
          return 0;
        }
        return nextIndex;
      });
      showNotification();
    }, 10000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(hideTimeout);
      clearInterval(interval);
    };
  }, [notifications.length]);

  const notification = notifications[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed bottom-6 left-6 z-50 max-w-xs"
          data-testid="social-proof-notification"
        >
          <div className="bg-card border border-card-border rounded-lg shadow-xl p-4 flex items-start gap-3">
            <div className="bg-chart-2/20 p-2 rounded-full">
              <ShoppingCart className="h-5 w-5 text-chart-2" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">
                {notification.name} de {notification.location}
              </p>
              <p className="text-xs text-muted-foreground">
                Acabou de garantir o acesso
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {notification.time}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
