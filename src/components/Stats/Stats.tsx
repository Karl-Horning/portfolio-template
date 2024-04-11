import Header from "@/components/Header/Header";
import StatSection from "./StatSection";
import { BiCodeAlt, BiFlag } from "react-icons/bi";
import { GoSmiley } from "react-icons/go";
import { BsCup } from "react-icons/bs";

/**
 * Stats component displaying various statistics with icons, numbers, and descriptions.
 * @returns {JSX.Element} Stats component JSX.
 */
export default function Stats() {
    /**
     * Data representing each statistic, including icon, number, and description.
     * @type {Array<{ icon: JSX.Element, number: string, description: string }>}
     */
    const statsData = [
        {
            icon: <BiFlag />,
            number: "2,500",
            description: "Projects Completed",
        },
        {
            icon: <GoSmiley />,
            number: "400",
            description: "Happy Clients",
        },
        {
            icon: <BiCodeAlt />,
            number: "98K",
            description: "Lines of Code",
        },
        {
            icon: <BsCup />,
            number: "78K",
            description: "Cups of Coffee",
        },
    ];

    return (
        <section id="blog" className="bg-black px-10 py-20 text-white">
            <div id="skills-container" className="container mx-auto">
                <Header title="Useful Stats" whiteHeader={true} />

                <div className="grid grid-cols-4 gap-4">
                    {/* Map over statsData to render each StatSection */}
                    {statsData.map((stat, index) => (
                        <StatSection
                            key={index}
                            icon={stat.icon}
                            number={stat.number}
                            description={stat.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
