import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface Section {
    id: string;
    label: string;
}

export default function ReflectionProgress({ sections }: { sections: Section[] }) {

    const [activeId, setActiveId] = useState(sections[0]?.id);
    const { scrollYProgress } = useScroll();
    const lineProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.3 });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);
    
    return (
        <div className="sticky top-28 h-fit flex gap-4">
            <div className="relative w-[2px] bg-white/10 rounded-full">
                <motion.div 
                    style={{ scaleY: lineProgress }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-400 to-violet-400 origin-top rounded-full"
                />
            </div>
            <nav className="flex flex-col gap-4 py-1">
                {sections.map(({ id, label }) => {
                    const isActive = activeId === id;
                    return (
                        <button
                            key={id}
                            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                            className="text-left"
                        >
                            <motion.span
                                animate={{ color: isActive ? "#ffffff" : "#64748b", x: isActive ? 4 : 0 }}
                                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                                className="text-sm font-medium"
                            >
                                {label}
                            </motion.span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}
