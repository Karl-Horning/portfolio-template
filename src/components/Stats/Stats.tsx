import Header from "@/components/Header/Header";

export default function Stats() {
    return (
        <section id="blog" className="container mx-auto my-10">
            <div className="my-20">
                <Header title="Useful Stats" />
            </div>

            <div id="skills-container" className="grid grid-cols-4 gap-4">
                <div>
                    <h3>2,500 Projects Completed</h3>
                </div>

                <div>
                    <h3>400 Happy Clients</h3>
                </div>

                <div>
                    <h3>98K Lines of Code</h3>
                </div>

                <div>
                    <h3>78K Cups of Coffee</h3>
                </div>
            </div>
        </section>
    );
}
