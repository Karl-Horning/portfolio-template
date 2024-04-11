import CvEntry from "@/components/AboutMe/CvEntry";

/**
 * Component representing the Education section.
 * @returns {JSX.Element} JSX representing the Education section.
 */
export default function Education() {
    return (
        <div className="mb-5 bg-white p-5">
            <h3 className="pb-5 text-2xl font-bold uppercase">Education</h3>

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
    );
}
