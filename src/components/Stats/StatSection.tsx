import { ReactNode } from "react";

/**
 * Props for the StatSection component.
 * @typedef {Object} StatSectionProps
 * @property {ReactNode} icon - Icon representing the statistic.
 * @property {string} number - Number value of the statistic.
 * @property {string} description - Description of the statistic.
 */
interface StatSectionProps {
    icon: ReactNode;
    number: string;
    description: string;
}

/**
 * StatSection component displaying a single statistic with icon, number, and description.
 * @param {StatSectionProps} props - Props for the StatSection component.
 * @returns {JSX.Element} StatSection component JSX.
 */
export default function StatSection({
    icon,
    number,
    description,
}: StatSectionProps) {
    return (
        <div className=" text-center font-bold uppercase">
            <h3 className="flex items-center justify-center pb-2 text-3xl">
                <span className="mr-2">{icon}</span>
                {number}
            </h3>
            <p>{description}</p>
        </div>
    );
}
