import SkillsBar from "@/components/AboutMe/SkillsBar";

/**
 * Component representing the ExpertIn section.
 * @returns {JSX.Element} JSX representing the ExpertIn section.
 */
export default function ExpertIn() {
    return (
        <div className="pb-5">
            <h3 className="pb-5 text-2xl font-bold uppercase">Expert In</h3>

            <p className="pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                harum! Consequuntur facere, repudiandae nulla omnis accusantium
                iste fugiat natus iusto. Dolorem, fugit quisquam tenetur illum
                totam ea maiores a. Saepe?
            </p>

            <SkillsBar label="Graphic Design" value={60} />
            <SkillsBar label="CSS" value={90} />
            <SkillsBar label="JavaScript" value={70} />
            <SkillsBar label="Wordpress" value={50} />
        </div>
    );
}
