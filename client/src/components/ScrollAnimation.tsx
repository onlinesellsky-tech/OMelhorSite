import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function ScrollAnimation({ 
  children, 
  delay = 0, 
  direction = "up",
  className = ""
}: ScrollAnimationProps) {
  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut" 
      }}
      viewport={{ 
        once: true, 
        margin: "-100px" 
      }}
    >
      {children}
    </motion.div>
  );
}

// Componente específico para animação staggered (cascata)
interface StaggeredAnimationProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  itemCount?: number;
}

export function StaggeredAnimation({ 
  children, 
  staggerDelay = 0.1,
  className = "",
  itemCount = 3
}: StaggeredAnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Componente para cada item dentro do StaggeredAnimation
interface StaggeredItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggeredItem({ children, className = "" }: StaggeredItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}