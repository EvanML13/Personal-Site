import { motion } from "framer-motion";
import { CircleCheckBig, Circle} from "lucide-react"
import { goals } from "../../data/reflectionData";
import Reveal from "../layout/Reveal";

export default function Goals() {
    return (
        <Reveal>
            <section className="px-6 md:px-16 py-12 max-w-3xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Goals & Learning Outcomes</h2>
                <div className="space-y-4">
                    {goals.map((goal) => (
                        <motion.div
                            key={goal.title}
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                            className="rounded-2xl bg-white/5 border border-white/10 p-5"
                        >
                            <div className="flex items-start gap-3">
                                {/* Use Circle With A Check For Accived Goals And Circle For Unachived Goals */}
                                {goal.achived ? (
                                    <CircleCheckBig size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                                ) : (
                                    <Circle size={20} className="text-slate-500 shrink-0 mt-0.5" />
                                )}
                                <div>
                                    <h3 className="text-white font-medium">{goal.description}</h3>
                                    <p className="text-sm text-slate-400 mt-1">[{goal.title}]</p>
                                    <ul className="mt-3 space-y-1.5">
                                        {goal.relatedGoal.map((b) =>(
                                            <li key={b} className="text-sm text-slate-300 mt-4 leading-relaxed">• {b}</li>

                                        ))}
                                    </ul>
                                    <p className="text-sm text-slate-300 mt-4">{goal.reflection}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}
