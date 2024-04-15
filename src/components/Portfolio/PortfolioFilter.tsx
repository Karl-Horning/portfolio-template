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
        <div className="mb-5 text-center grid md:grid-cols-6 md:gap-2">
            {filters.map((filter) => (
                <OutlineButton key={filter} title={filter} className='mb-2' />
            ))}
        </div>
    );
}
