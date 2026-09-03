import type { ReflectionSection } from "../../types/content";
import Reveal from "../layout/Reveal";

// Function For Reflection Sections With Heading And Content Body
export default function ProseSection({ header, content}: ReflectionSection) {
    return (
        <Reveal>
            <section className="px-6 md:px-16 py-12 max-w-3xl">
                <h2 className="text-2xl font-semibold text-white mb-4">{header}</h2>
                <p className="text-slate-300 leading-relaxed">{content}</p>
            </section>

        </Reveal>
    );
}
