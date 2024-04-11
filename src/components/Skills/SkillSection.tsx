import { ReactNode } from "react";

/**
 * Props for the SkillSection component.
 * @typedef {Object} SkillsBarProps
 * @property {ReactNode} icon - Icon representing the skill.
 * @property {string} title - Title of the skill.
 * @property {string} description - Description of the skill.
 */
interface SkillSectionProps {
    icon: ReactNode;
    title: string;
    description: string;
}

/**
 * SkillSection component displaying a single skill with icon, title, and description.
 * @param {SkillSectionProps} props - Props for the SkillSection component.
 * @returns {JSX.Element} SkillSection component JSX.
 */
export default function SkillSection({
    icon,
    title,
    description,
}: SkillSectionProps) {
    return (
        <div className="grid grid-cols-6 gap-4 p-4">
            <div className="col-span-1 flex justify-center text-4xl">
                {icon}
            </div>

            <div className="col-span-5">
                <h3 className="mb-3 text-lg font-bold uppercase">{title}</h3>

                <p>{description}</p>
            </div>
        </div>
    );
}
