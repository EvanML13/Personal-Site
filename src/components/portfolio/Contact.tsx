import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { contactInfo } from "../../data/portfolioData"
import Reveal from "../layout/Reveal"

// Links For Platforms To Contact
const links = [
    { href: `mailto:${contactInfo.email}`, label: contactInfo.email, icon: Mail },
    { href: contactInfo.linkedin, label: "LinkedIn", icon: FaLinkedin},
    { href: contactInfo.github, label: "GitHub", icon: FaGithub},
];

export default function Contact() {
    return (
        <Reveal>
            <section id="contact" className="px-6 md:px-16 py-12 flex flex-wrap gap-4">
                {links.map(({ href, label, icon: Icon }) => (
                    <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 text-sm transition-colors"
                    >
                        <Icon size={16} />
                        {label}
                    </motion.a>
                ))}
            </section>
        </Reveal>
    );
}
