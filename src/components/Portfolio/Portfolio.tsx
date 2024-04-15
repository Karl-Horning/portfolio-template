import Header from "@/components/Header/Header";
import PortfolioFilter from "@/components/Portfolio/PortfolioFilter";
import PortfolioGrid from "@/components/Portfolio/PortfolioGrid";

/**
 * Portfolio component displays a section containing a header, portfolio filter, and portfolio grid.
 * @returns {JSX.Element} Portfolio component.
 */
export default function Portfolio() {
    return (
        <section id="portfolio" className=" px-10 py-40">
            <div className="container mx-auto">
                <Header title="Awesome Work" />
                <PortfolioFilter />
                <PortfolioGrid />
            </div>
        </section>
    );
}
