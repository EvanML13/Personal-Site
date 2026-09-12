import { motion } from "framer-motion"
import { education } from "../../data/portfolioData";
import Reveal from "../layout/Reveal";

export default function Education() {
    return (
        <Reveal>
            <section className="px-6 md:px-16 py-12">
                <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
                <div className="space-y-6">
                    {education.map((edu) => (
                        <motion.div 
                            key={edu.institution} 
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                            className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/[0.07] transition-colors"
                        >
                            <div className="flex justify-between flex-wrap gap-2">
                                <h3 className="text-lg font-medium text-white">{edu.institution}</h3>
                                <span className="text-sm text-slate-400">{edu.dateRange}</span>
                            </div>
                            <p className="text-slate-300 mt-1">{edu.major}</p>
                            {edu.details && edu.details.length > 0 && (
                                <ul className="mt-3 space-y-1">
                                    {edu.details.map((d) => (
                                        <li key={d} className="text-sm text-slate-400">• {d}</li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}
