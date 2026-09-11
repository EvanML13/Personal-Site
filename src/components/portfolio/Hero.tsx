import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useLayoutEffect } from "react";
import { contactInfo } from "../../data/portfolioData";

export default function Hero() {

    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLElement>(null);
    const [slideDistance, setSlideDistance] = useState(80); // Fallback Before Measuring

    useLayoutEffect(() => {
        // Function To Measure The Distance Between The Bottom Of The Text And Top Of The Contact Info For Sliding Animation
        function measure() {
            const textEl = textRef.current;
            const contactEl = document.getElementById("contact");
            if (!textEl || !contactEl) return;

            const textBottom = textEl.getBoundingClientRect().bottom + window.scrollY;
            const contactTop = contactEl.getBoundingClientRect().top + window.scrollY;
            setSlideDistance(Math.max(contactTop - textBottom, 0));
        }

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const SLIDE_MULTIPLIER = 3.3;

    const y = useTransform(scrollYProgress, [0, 1], [0, slideDistance * SLIDE_MULTIPLIER]);
    const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

    return (
        <section 
            ref={sectionRef} 
            className="min-h-[70vh] flex flex-col justify-center items-start px-6 md:px-16 max-w-4xl"
        >
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
