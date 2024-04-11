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
        <section id="about" className="my-10 bg-slate-100 p-10">
            <div className="container mx-auto">
                <div className="my-20">
                    <Header title="About Me" />
                </div>

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
