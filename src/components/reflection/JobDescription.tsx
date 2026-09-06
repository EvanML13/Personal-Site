import { motion } from 'framer-motion'
import { jobDescription } from '../../data/reflectionData'
import Reveal from '../layout/Reveal';

export default function JobDescription() {
    return (
        <Reveal>
            <section className="px-6 md:px-16 py-12 max-w-3xl">
                <h2 className="text-2xl font-semibold text-white mb-6">{jobDescription.header}</h2>
                <div className="space-y-6">
                    {jobDescription.blocks.map((block, i) =>
                        block.type === "text" ? (
                            <p key={i} className="text-slate-300 leading-relaxed">
                                {block.text}
                            </p>
                        ) : (
                            <motion.figure
                                key={i}
                                initial={{ opacity: 0, scale: 0.97 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            >
                                <img 
                                    src={block.src}
                                    alt={block.alt}
                                    loading="lazy"
                                    className="rounded-2xl border border-white/10 w-full"
                                />
                                {block.caption && (
                                    <figcaption className="text-sm text-slate-500 mt-2 text-center">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </motion.figure>
                        )
                    )}
                </div>
            </section>
        </Reveal>
    );
}
