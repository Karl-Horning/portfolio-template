import SkillsBar from "@/components/AboutMe/SkillsBar";
import CvEntry from "@/components/AboutMe/CvEntry";
import SolidButton from "@/components/Button/SolidButton";

/**
 * Component representing the About Me section.
 * @returns {JSX.Element} JSX representing the About Me section.
 */
export default function AboutMe() {
    return (
        <section id="about" className="my-10 bg-slate-100 p-10">
            <div className="container mx-auto">
                <div className="my-20">
                    <h2 className="text-center text-4xl font-bold uppercase">
                        About Me
                    </h2>

                    <hr className="hr" />
                </div>

                <div className="gap-4 md:grid md:grid-cols-2">
                    <div className="pb-5">
                        <h3 className="pb-5 text-2xl font-bold uppercase">
                            Who Am I?
                        </h3>

                        <p className="pb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Numquam doloribus sit porro vel ut quo quidem,
                            minima error? Aspernatur quasi animi nesciunt
                            reprehenderit quos fugit et nobis distinctio,
                            voluptatem illo.
                        </p>

                        <p className="pb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Ullam, facilis. Quis officiis corporis,
                            deleniti esse quasi perspiciatis? Accusantium
                            perspiciatis, dolorum sunt, libero, eos quidem
                            voluptas rerum voluptatum ipsa laboriosam quae?
                        </p>

                        <p className="pb-5">
                            <SolidButton title="Download my CV" />
                        </p>
                    </div>

                    <div className="pb-5">
                        <h3 className="pb-5 text-2xl font-bold uppercase">
                            Expert In
                        </h3>

                        <p className="pb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quia, harum! Consequuntur facere, repudiandae
                            nulla omnis accusantium iste fugiat natus iusto.
                            Dolorem, fugit quisquam tenetur illum totam ea
                            maiores a. Saepe?
                        </p>

                        <SkillsBar label="Graphic Design" value={60} />
                        <SkillsBar label="CSS" value={90} />
                        <SkillsBar label="JavaScript" value={70} />
                        <SkillsBar label="Wordpress" value={50} />
                    </div>

                    <div className="mb-5 bg-white p-5">
                        <h3 className="pb-5 text-2xl font-bold uppercase">
                            Education
                        </h3>

                        <CvEntry
                            yearFrom={2009}
                            yearTo={2010}
                            title="Web Development"
                            location="NY University"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum minima neque maiores quibusdam laborum et sequi consequuntur necessitatibus tenetur nihil assumenda, corporis, qui a facere molestiae optio, nulla expedita aliquam."
                        />

                        <CvEntry
                            yearFrom={2007}
                            yearTo={2018}
                            title="Web Design"
                            location="NY University"
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempora consequuntur optio eligendi sequi adipisci incidunt temporibus blanditiis atque molestias illum eos, ad tenetur sint et velit, dolor eum sunt?"
                        />

                        <CvEntry
                            yearFrom={2005}
                            yearTo={2007}
                            title="Graphic Design"
                            location="NY University"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perspiciatis suscipit sapiente expedita similique, impedit quod, dolorum, dolor iusto incidunt iste nisi quia. Quis eaque a voluptate dicta sit dignissimos?"
                            bottomBorder={false}
                        />
                    </div>

                    <div className="mb-5 bg-white p-5">
                        <h3 className="pb-5 text-2xl font-bold uppercase">
                            Experience
                        </h3>

                        <CvEntry
                            yearFrom={2013}
                            yearTo={2014}
                            title="Graphic Designer"
                            location="Eyeline Animation"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum minima neque maiores quibusdam laborum et sequi consequuntur necessitatibus tenetur nihil assumenda, corporis, qui a facere molestiae optio, nulla expedita aliquam."
                        />

                        <CvEntry
                            yearFrom={2011}
                            yearTo={2013}
                            title="Graphic Designer"
                            location="Pixar"
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempora consequuntur optio eligendi sequi adipisci incidunt temporibus blanditiis atque molestias illum eos, ad tenetur sint et velit, dolor eum sunt?"
                        />

                        <CvEntry
                            yearFrom={2007}
                            yearTo={2010}
                            title="Senior Design"
                            location="Enter AD"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perspiciatis suscipit sapiente expedita similique, impedit quod, dolorum, dolor iusto incidunt iste nisi quia. Quis eaque a voluptate dicta sit dignissimos?"
                            bottomBorder={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
