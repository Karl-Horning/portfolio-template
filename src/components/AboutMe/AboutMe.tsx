import Header from "@/components/Header/Header";
import WhoAmI from "@/components/AboutMe/WhoAmI";
import ExpertIn from "@/components/AboutMe/ExpertIn";
import Education from "@/components/AboutMe/Education";
import Experience from "@/components/AboutMe/Experience";

/**
 * Component representing the About Me section.
 * @returns {JSX.Element} JSX representing the About Me section.
 */
export default function AboutMe() {
    return (
        <section id="about" className="bg-slate-100 px-10 py-20">
            <div className="container mx-auto">
                <Header title="About Me" />

                <div className="gap-4 md:grid md:grid-cols-2">
                    <WhoAmI />
                    <ExpertIn />
                    <Education />
                    <Experience />
                </div>
            </div>
        </section>
    );
}
