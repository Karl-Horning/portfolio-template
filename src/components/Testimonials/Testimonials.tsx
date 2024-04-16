import Header from "@/components/Header/Header";
import TestimonialsCarousel from "@/components/Testimonials/TestimonialsCarousel";

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-black px-10 py-40 text-white">
            <div className="container mx-auto">
                <Header title="What My Clients Say" whiteHeader />
                <TestimonialsCarousel />
            </div>
        </section>
    );
}
