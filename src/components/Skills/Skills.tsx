import Header from "@/components/Header/Header";

export default function Skills() {
    return (
        <section id="skills" className="container mx-auto my-10">
            <div className="my-20">
                <Header title="What I Do" />
            </div>

            <div id="skills-container" className="grid grid-cols-3 gap-4">
                <div>
                    <h3>Web Design &amp; UI</h3>
                </div>

                <div>
                    <h3>User Flow &amp; Wireframes</h3>
                </div>

                <div>
                    <h3>Visual Design</h3>
                </div>

                <div>
                    <h3>Mobile App Design</h3>
                </div>

                <div>
                    <h3>Logo Design</h3>
                </div>

                <div>
                    <h3>Print Design</h3>
                </div>
            </div>
        </section>
    );
}
