import { Progress } from "@nextui-org/react";

/**
 * Props for the SkillsBar component.
 * @typedef {Object} SkillsBarProps
 * @property {string} label - The label for the skill.
 * @property {number} value - The value representing the skill level (0-100).
 */
interface SkillsBarProps {
    label: string;
    value: number;
}

/**
 * Component representing a skills bar.
 * @param {SkillsBarProps} props - Props for the SkillsBar component.
 * @returns {JSX.Element} JSX representing the SkillsBar component.
 */
export default function SkillsBar({ label, value }: Readonly<SkillsBarProps>) {
    return (
        // Progress component to display the skill level
        <Progress
            className="pb-5 uppercase"
            classNames={{ indicator: "bg-gradient-to-r from-black to-black" }}
            color="default"
            label={label}
            radius="none"
            showValueLabel={true}
            size="lg"
            value={value}
            maxValue={100}
            formatOptions={{
                style: "percent",
            }}
        />
    );
}
