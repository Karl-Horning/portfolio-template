import { OutlineButton } from "@/components/Buttons";

export default function PortfolioFilter() {
    const filters = [
        "All Products",
        "Website",
        "Logo",
        "Application",
        "Illustration",
        "Print Design",
    ];

    return (
        <div className="text-center">
            {filters.map((filter) => (
                <span className="px-2" key={filter}>
                    <OutlineButton key={filter} title={filter} />
                </span>
            ))}
        </div>
    );
}
