import CvEntry from "@/components/AboutMe/CvEntry";

/**
 * Component representing the Experience section.
 * @returns {JSX.Element} JSX representing the Experience section.
 */
export default function Experience() {
    return (
        <div className="mb-5 bg-white p-5">
            <h3 className="pb-5 text-2xl font-bold uppercase">Experience</h3>

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
    );
}
