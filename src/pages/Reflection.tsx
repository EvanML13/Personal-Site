import PageTransition from "../components/layout/PageTransition";
import JobDescription from "../components/reflection/JobDescription";
import ProseSection from "../components/reflection/ProseSection";
import Goals from "../components/reflection/Goals";
import ReflectionProgress from "../components/reflection/ReflectionProgress";
import { abstract, employerInfo, conclusion, acknowledgements } from "../data/reflectionData"
import { label } from "framer-motion/client";

const sections = [
  { id: "abstract", label: "Abstract" },
  { id: "employer-info", label: "Employer" },
  { id: "goals", label: "Goals" },
  { id: "job-description", label: "Job Description" },
  { id: "conclusion", label: "Conclusion" },
  { id: "acknowledgements", label: "Acknowledgements" },
];

export default function Reflection() {
    return (
        <PageTransition>
            <div className="min-h-screen grid lg:grid-cols-3 gap-8 px-6 md:px-16 pb-24-h-screen">
                <div className="lg:col-span-2">
                    <ProseSection id="abstract" {...abstract} />
                    <ProseSection id="employer-info" {...employerInfo} />
                    <Goals />
                    <JobDescription />
                    <ProseSection id="conclusion" {...conclusion} />
                    <ProseSection id="acknowledgements" {...acknowledgements} />
                </div>
                <div className="hidden lg:block">
                    <ReflectionProgress sections={sections} />
                </div>
            </div>
        </PageTransition>
    );    
}
