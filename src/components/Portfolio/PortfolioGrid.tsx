import PortfolioCard from "@/components/Portfolio/PortfolioCard";

/**
 * PortfolioGrid component displays a grid of portfolio items using PortfolioCard component.
 * @returns {JSX.Element} PortfolioGrid component.
 */
export default function PortfolioGrid() {
    // Array of portfolio items with their details
    const portfolioItems = [
        {
            id: "524310b3-55a5-42df-9fbf-2d8711e17c4a",
            title: "Item 1",
            tag: "Website",
            imageAlt: "Woman listing to music",
            imageSrc: "/images/portfolio/pexels-cottonbro-studio-3584973.jpg",
        },
        {
            id: "b2f68334-2887-4e97-a2d3-b2cdb76973c0",
            title: "Item 2",
            tag: "Logo",
            imageAlt: "Woman listing to music",
            imageSrc: "/images/portfolio/pexels-designecologist-1779487.jpg",
        },
        {
            id: "59578e51-8457-40ae-ab6c-329a5dbd04e6",
            title: "Item 3",
            tag: "Application",
            imageAlt: "Woman listing to music",
            imageSrc: "/images/portfolio/pexels-freestocksorg-744462.jpg",
        },
        {
            id: "52f048ac-c051-4484-97b8-ae108e969ba7",
            title: "Item 4",
            tag: "Illustration",
            imageAlt: "Woman listing to music",
            imageSrc: "/images/portfolio/pexels-markus-spiske-131778.jpg",
        },
        {
            id: "56af96d1-19fc-444b-8638-c2ab8c675da8",
            title: "Item 5",
            tag: "Print Design",
            imageAlt: "Woman listing to music",
            imageSrc: "/images/portfolio/pexels-markus-spiske-360591.jpg",
        },
        {
            id: "8b1e5686-1d87-4ce8-b5d4-7bda34964721",
            title: "Item 6",
            tag: "Website",
            imageAlt: "Woman listing to music",
            imageSrc: "/images/portfolio/pexels-mikael-blomkvist-6476595.jpg",
        },
        {
            id: "94326d94-7242-4bd6-8da5-e51a155c53ce",
            title: "Item 7",
            tag: "Logo",
            imageAlt: "Woman listing to music",
            imageSrc: "/images/portfolio/pexels-mikael-blomkvist-6476808.jpg",
        },
        {
            id: "af79f944-6c48-4515-bf64-8283a8729c10",
            title: "Item 8",
            tag: "Application",
            imageAlt: "Woman listing to music",
            imageSrc: "/images/portfolio/pexels-photo-1111367.jpg",
        },
    ];

    // Return grid layout with portfolio items mapped to PortfolioCard components
    return (
        <div className="grid gap-2 md:grid-cols-4">
            {portfolioItems.map((item) => (
                <PortfolioCard
                    key={item.id}
                    title={item.title}
                    tag={item.tag}
                    imageAlt={item.imageAlt}
                    imageSrc={item.imageSrc}
                />
            ))}
        </div>
    );
}
