import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Function Handle Animation When Between Portfolio And Reflection Pages
export default function PageTransition( { children }: { children: ReactNode }) {
  
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}