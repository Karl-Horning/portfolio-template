import Header from "@/components/Header/Header";
import SkillSection from "./SkillSection";
import { FaComputer, FaPrint } from "react-icons/fa6";
import { BiBrush, BiMobile } from "react-icons/bi";
import { LuFrame } from "react-icons/lu";
import { BsOctagon } from "react-icons/bs";

/**
 * Skills component displaying various skills with icons and descriptions.
 * @returns {JSX.Element} Skills component JSX.
 */
export default function Skills() {
    /**
     * Data representing each skill, including icon, title, and description.
     * @type {Array<{ icon: React.ReactNode, title: string, description: string }>}
     */
    const skillsData = [
        {
            icon: <FaComputer />,
            title: "Web Design &amp; UI",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur nam exercitationem, soluta qui cupiditate expedita, corrupti suscipit cumque, dolorum distinctio illo quod reiciendis sit eius atque omnis enim eligendi.",
        },
        {
            icon: <LuFrame />,
            title: "User Flow &amp; Wireframes",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur nam exercitationem, soluta qui cupiditate expedita, corrupti suscipit cumque, dolorum distinctio illo quod reiciendis sit eius atque omnis enim eligendi.",
        },
        {
            icon: <BiBrush />,
            title: "Visual Design",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur nam exercitationem, soluta qui cupiditate expedita, corrupti suscipit cumque, dolorum distinctio illo quod reiciendis sit eius atque omnis enim eligendi.",
        },
        {
            icon: <BiMobile />,
            title: "Mobile App Design",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur nam exercitationem, soluta qui cupiditate expedita, corrupti suscipit cumque, dolorum distinctio illo quod reiciendis sit eius atque omnis enim eligendi.",
        },
        {
            icon: <BsOctagon />,
            title: "Logo Design",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur nam exercitationem, soluta qui cupiditate expedita, corrupti suscipit cumque, dolorum distinctio illo quod reiciendis sit eius atque omnis enim eligendi.",
        },
        {
            icon: <FaPrint />,
            title: "Print Design",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur nam exercitationem, soluta qui cupiditate expedita, corrupti suscipit cumque, dolorum distinctio illo quod reiciendis sit eius atque omnis enim eligendi.",
        },
    ];

    return (
        <section id="skills" className="bg-black px-10 py-40 text-white">
            <div className="container mx-auto">
                <Header title="What I Do" whiteHeader={true} />

                <div
                    id="skills-container"
                    className="md:grid md:grid-cols-3 md:gap-4"
                >
                    {/* Map over skillsData to render each SkillSection */}
                    {skillsData.map((skill, index) => (
                        <SkillSection
                            key={index}
                            icon={skill.icon}
                            title={skill.title}
                            description={skill.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
