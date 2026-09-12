import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../../data/portfolioData";
import Reveal from "../layout/Reveal";
import { withAlpha } from "../../lib/color";
import { skillColors, defaultSkillColor } from "../../data/skillColors";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const reduceMotion = useReducedMotion();
    const categories = ["All", ...skills.map((s) => s.category)]

    const visibleSkills = skills
        .filter((group) => activeCategory === "All" || group.category == activeCategory)
        .flatMap((group) => group.skills); 

    return (
        <Reveal>
            <section className="px-6 md:px-16 py-12">
                 <h2 className="text-2xl font-semibold text-white mb-6">Technical Skills</h2>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="relative px-4 py-1.5 text-sm rounded-full active:scale-95 transition-transform duration-100"
                        >
                            {activeCategory == cat && (
                                <motion.div
                                    layoutId="skill-filter-active"
                                    className="absolute inset-0 bg-white rounded-full"
                                    transition={reduceMotion ? { duration: 0.15 } : { type: "spring", bounce: 0, duration: 0.35 }}
                                />
                            )}

                            <span className={`relative z-10 ${activeCategory === cat ? "text-slate-900" : "text-slate-300"}`}>
                                {cat}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Skill Pills Reflecting With Layout Animation When Filtered */}
                <motion.div layout className="flex flex-wrap gap-2">
                    {visibleSkills.map((skill) => {
                        const color = skillColors[skill] ?? defaultSkillColor;
                        return (
                            <motion.span
                                key={skill}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={reduceMotion ? { duration: 0.15 } : { type: "spring", bounce: 0.15, duration: 0.35 }}
                                style={{
                                    backgroundColor: withAlpha(color, 0.12),
                                    borderColor: withAlpha(color, 0.4),
                                    color: color,
                                }}
                                className="px-3 py-1.5 text-sm rounded-full border"
                            >
                                {skill}
                            </motion.span>
                        );
                    })}
                </motion.div>
            </section>
        </Reveal>
    );
}
