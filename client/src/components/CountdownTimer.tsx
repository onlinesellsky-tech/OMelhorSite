import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const saved = localStorage.getItem('offerTimerExpiry');
    if (saved) {
      const expiryTime = parseInt(saved);
      const remaining = Math.max(0, expiryTime - Date.now());
      if (remaining > 0) {
        return Math.floor(remaining / 1000);
      }
    }
    const initialSeconds = 15 * 60;
    const expiryTime = Date.now() + (initialSeconds * 1000);
    localStorage.setItem('offerTimerExpiry', expiryTime.toString());
    return initialSeconds;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <motion.div
      className="bg-destructive text-destructive-foreground px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 sm:gap-3 max-w-full"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      data-testid="countdown-timer"
    >
      <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
        <span className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">
          Oferta expira em:
        </span>
        <span className="font-mono text-base sm:text-lg md:text-xl font-bold" data-testid="timer-display">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </div>
    </motion.div>
  );
}
