import AboutMe from "@/components/AboutMe/AboutMe";
import Blog from "@/components/Blog/Blog";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import Stats from "@/components/Stats/Stats";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <AboutMe />
            {/* Skills Section */}

            <Skills />

            {/* Portfolio Section */}
            <Portfolio />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Blog Section */}
            <Blog />

            {/* Stats Section */}
            <Stats />

            {/* Contact Form Section */}
            <ContactForm />

            {/* Newsletter Section */}
            <Newsletter />

            {/* Footer Section */}
            <Footer />
        </main>
    );
}
