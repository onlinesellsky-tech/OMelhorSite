import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const notifications = [
  { name: "Maria S.", location: "São Paulo", time: "2 minutos atrás" },
  { name: "João P.", location: "Rio de Janeiro", time: "5 minutos atrás" },
  { name: "Ana C.", location: "Belo Horizonte", time: "8 minutos atrás" },
  { name: "Carlos M.", location: "Curitiba", time: "10 minutos atrás" },
  { name: "Juliana L.", location: "Porto Alegre", time: "12 minutos atrás" },
  { name: "Roberto F.", location: "Brasília", time: "15 minutos atrás" },
];

export default function SocialProofNotification() {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;
    
    const showNotification = () => {
      setIsVisible(true);
      hideTimeout = setTimeout(() => setIsVisible(false), 4000);
    };

    const initialDelay = setTimeout(showNotification, 3000);

    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
      showNotification();
    }, 8000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(hideTimeout);
      clearInterval(interval);
    };
  }, []);

  const notification = notifications[currentNotification];

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
