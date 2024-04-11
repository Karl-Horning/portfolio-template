import Header from "@/components/Header/Header";

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-black px-10 py-20 text-white">
            <div className="container mx-auto">
                <Header title="Why My Clients Say" whiteHeader={true} />

                <div
                    id="testimonials-container"
                    className="grid grid-cols-3 gap-4"
                >
                    <div className="col-span-1">
                        <h3>Why Choose Me?</h3>
                    </div>

                    <div className="col-span-2">
                        <h3>Client&apos;s Feedback</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
