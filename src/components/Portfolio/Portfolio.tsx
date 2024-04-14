import Header from "@/components/Header/Header";
import PortfolioFilter from "@/components/Portfolio/PortfolioFilter";

export default function Portfolio() {
    return (
        <section id="portfolio" className=" px-10 py-40">
            <div className="container mx-auto">
                <Header title="Awesome Work" />
                <PortfolioFilter />
            </div>
        </section>
    );
}
