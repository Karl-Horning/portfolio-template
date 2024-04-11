import Header from "@/components/Header/Header";

export default function Newsletter() {
    return (
        <section id="newsletter" className="bg-black px-10 py-20 text-white">
            <div className="container mx-auto">
                <Header title="Newsletter" whiteHeader={true} />
            </div>
        </section>
    );
}
