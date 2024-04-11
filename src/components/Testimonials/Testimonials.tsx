import Header from "@/components/Header/Header";

export default function Testimonials() {
    return (
        <section id="testimonials" className="container mx-auto my-10">
            <div className="my-20">
                <Header title="Why My Clients Say" />

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
