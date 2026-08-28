import { motion } from "framer-motion";
import { projects } from "../../data/portfolioData";
import Reveal from "../layout/Reveal";

export default function Projects() {
    return (
        <Reveal>
            <section className="px-6 md:px-16 py-12">
                <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {projects.map((projects) => (
                        <motion.a 
                            key={projects.title}
                            href={projects.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                            className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/[0.07] transition-colors"
                        >
                            <div className="flex justify-between items-start gap-2">
                                <h3 className="text-lg font-medium text-white">{projects.title}</h3>
                                <span className="text-xs text-slate-500 shrink-0">{projects.year}</span>
                            </div>
                            <p className="text-sm text-slate-400 mt-2 leading-relaxed">{projects.description}</p>
                            <div className="flex flex-wrap gap-1.5 mt-4">
                                {projects.techStack.map((tech) => (
                                    <span key={tech} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}
