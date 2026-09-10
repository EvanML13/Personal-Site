import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { contactInfo } from "../../data/portfolioData";

export default function Hero() {

    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"] // Tack From Section Entering To Fully Leaving The Top
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="min-h-[70vh] flex flex-col justify-center items-start px-6 md:px-16 max-w-4xl">
            <motion.div style={{ y, opacity }}>
                <h1
                    className="font-bold text-white"
                    style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
                >
                    {contactInfo.name}
                </h1>
                <p className="mt-4 text-lg text-slate-400 max-w-xl leading-relaxed">
                    Computer Science Honors Co-op Student at the University of Guelph Website Coordinator / Web Analyst Intern at the University of Guelph  {/* Focused on AI and Full-Stack Development | */}
                </p>
            </motion.div>
        </section>
    );
}
