import type { ReflectionSection } from "../../types/content";
import Reveal from "../layout/Reveal";

// Function For Reflection Sections With Heading And Content Body
export default function ProseSection({ id, header, content}: ReflectionSection & { id?: string }) {
    return (
        <Reveal>
            <section id={id} className="py-12">
                <h2 className="text-2xl font-semibold text-white mb-4">{header}</h2>
                <p className="text-slate-300 leading-relaxed whitespace-pre-line">{content}</p>
            </section>
        </Reveal>
    );
}
