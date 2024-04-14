import SkillsBar from "@/components/AboutMe/SkillsBar";

/**
 * Component representing the ExpertIn section.
 * @returns {JSX.Element} JSX representing the ExpertIn section.
 */
export default function ExpertIn() {
    const skills = [
        { label: "Graphic Design", value: 60 },
        { label: "CSS", value: 90 },
        { label: "JavaScript", value: 70 },
        { label: "Wordpress", value: 50 },
    ];

    return (
        <div className="pb-5">
            <h3 className="pb-5 text-2xl font-bold uppercase">Expert In</h3>

            <p className="pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                harum! Consequuntur facere, repudiandae nulla omnis accusantium
                iste fugiat natus iusto. Dolorem, fugit quisquam tenetur illum
                totam ea maiores a. Saepe?
            </p>

            {skills.map((skill) => (
                <SkillsBar
                    key={skill.label}
                    label={skill.label}
                    value={skill.value}
                />
            ))}
        </div>
    );
}
