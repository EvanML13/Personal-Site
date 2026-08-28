import { experience } from "../../data/portfolioData";
import Reveal from "../layout/Reveal";

export default function Experience(){
    return(
        <Reveal>
            <section className="px-6 md:px-16 py-12 pb-24">
                <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
                <div className="space-y-6">
                    {experience.map((job) => (
                        <div key={job.role + job.organization} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                            <div className="flex justify-between flex-wrap gap-2">
                                <div>
                                    <h3 className="text-lg font-medium text-white">{job.role}</h3>
                                    <p className="text-slate-300 text-sm">{job.organization} - {job.location}</p>
                                </div>
                                <span className="text-sm text-slate-400 shrink-0">{job.dateRange}</span>
                            </div>
                            <ul className="mt-3 space-y-1.5">
                                {job.bullets.map((b) =>(
                                    <li key={b} className="text-sm text-slate-400 leading-relaxed">• {b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}
