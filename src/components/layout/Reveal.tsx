import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Scroll-Reveal Wrapper To Allow Sections Bellow To Fade/Slide In As It Enters The Viewpoint
export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", bounce: 0, duration: 0.5, delay }}
        >
            {children}
        </motion.div>
    );
}
