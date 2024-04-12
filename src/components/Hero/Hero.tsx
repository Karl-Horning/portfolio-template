import { OutlineButton } from "../Buttons";

export default function Hero() {
    return (
        <section id="hero" className="px-10 py-40">
            <div id="hero-container" className="container mx-auto">
                <div className="md:grid md:grid-cols-2 md:gap-4">
                    <div id="hero-text-container">
                        <h1 className="mb-5 text-4xl font-bold uppercase">
                            Let&apos;s build something great together
                        </h1>

                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ad, eos earum impedit delectus provident
                            voluptatibus laudantium! Soluta nesciunt asperiores
                            deserunt accusantium tempore molestiae vero aut
                            dolores. Deleniti atque accusantium nemo.
                        </p>

                        <p className="mb-5">
                            <OutlineButton title="Let's Talk" />
                        </p>
                    </div>

                    <div id="hero-image-container">Image goes here!</div>
                </div>
            </div>
        </section>
    );
}
