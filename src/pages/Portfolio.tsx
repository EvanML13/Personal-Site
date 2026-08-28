import PageTransition from "../components/layout/PageTransition";
import Hero from "../components/portfolio/Hero";
import Contact from "../components/portfolio/Contact";
import Education from "../components/portfolio/Education";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Experience from "../components/portfolio/Experience";

// Portfolio Components
export default function Portfolio() {
    return (
        <PageTransition>
            <div className="min-h-screen">
                <Hero />
                <Contact />
                <Education />
                <Skills />
                <Experience />
                <Projects />            
            </div>
        </PageTransition>
    );
}
