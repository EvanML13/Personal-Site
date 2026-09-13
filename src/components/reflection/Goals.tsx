import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleCheckBig, Circle, ChevronDown } from "lucide-react"
import { goals } from "../../data/reflectionData";
import Reveal from "../layout/Reveal";

// Pull Goal Title Before The "-" For A Compact Tag
function shortTag(title: string) {
    return title.split(" - ")[0].trim();
}

export default function Goals() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Reveal>
            <section id="goals" className="py-20">
                <h2 className="text-2xl font-semibold text-white mb-6">Goals & Learning Outcomes</h2>
                <div className="space-y-3">
                    {goals.map((goal, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={goal.title}
                                layout
                                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-start gap-3 p-5 text-left active:scale-[0.99] transition-transform duration-100"
                                >
                                    {/* Use Circle With A Check For Accived Goals And Circle For Unachived Goals */}
                                    {goal.achived ? (
                                        <CircleCheckBig size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                                    ) : (
                                        <Circle size={20} className="text-slate-500 shrink-0 mt-0.5" />
                                    )}
                                    <div className="flex-1">
                                        <span className="inline-block text-xs uppercase tracking-wide text-slate-500 mb-1">
                                            {shortTag(goal.title)}
                                        </span>
                                        <h3 className="text-white text-base font-semibold leading-snug">
                                            {goal.description}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{  rotate: isOpen ? 180 : 0 }}
                                        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                                        className="shrink-0 mt-1"
                                    >
                                        {/* Use Chevron Down For Accorian */}
                                        <ChevronDown size={18} className="text-slate-400" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ type: "spring", bounce: 0, duration: 0.35 }}
                                            className="px-5 pb-5 pl-11"
                                        >
                                            <ul className="space-y-1">
                                                {goal.relatedGoal.map((b) =>(
                                                    <li key={b} className="text-sm text-slate-400 leading-relaxed">
                                                        • {b}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                                                {goal.reflection}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>  
                        );
                    })}
                </div>
            </section>
        </Reveal>
    );
}
