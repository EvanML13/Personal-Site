import PageTransition from "../components/layout/PageTransition";
import JobDescription from "../components/reflection/JobDescription";
import ProseSection from "../components/reflection/ProseSection";
import Goals from "../components/reflection/Goals";
import {
    abstract,
    employerInfo,
    conclusion,
    acknowledgements
} from "../data/reflectionData"

export default function Reflection() {
    return (
        <PageTransition>
            <div className="min-h-screen">
                <ProseSection {...abstract} />
                <ProseSection {...employerInfo} />
                <Goals />
                <JobDescription />
                <ProseSection {...conclusion} />
                <ProseSection {...acknowledgements} />
            </div>
        </PageTransition>
    );    
}
