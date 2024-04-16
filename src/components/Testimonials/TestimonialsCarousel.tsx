"use client";

import TestimonialsBlockquote from "@/components/Testimonials/TestimonialsBlockquote";
import { Avatar } from "@nextui-org/react";

export default function TestimonialsCarousel() {
    const testimonials = [
        {
            id: "55604e22-171c-4e16-a910-b68a77258279",
            name: "James",
            position: "Web Developer",
            quote: `Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Repellat atque aperiam quam quo incidunt
            cumque recusandae corporis, inventore quae
            doloremque laboriosam mollitia reprehenderit
            officiis temporibus ut delectus fugit enim eligendi?
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nesciunt pariatur quas modi. Iusto quod rerum
            officia necessitatibus voluptas iure aliquam? Ex
            tenetur et exercitationem beatae nostrum veniam
            expedita a earum.`,
            imgSrc: "https://i.pravatar.cc/150?u=a04258114e29026708c",
        },
        {
            id: "62efcf20-2ea0-463d-8dea-8bb0d5580bc3",
            name: "Dave",
            position: "UX Developer",
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dolorem facilis eveniet, tempore soluta, est nobis non qui nesciunt aut ducimus autem, laborum officia fugit pariatur? Ab vel laborum facilis?",
            imgSrc: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        },
        {
            id: "6513e8e4-364a-4013-8aab-db41c6794099",
            name: "Betty",
            position: "UX Developer",
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dolorem facilis eveniet, tempore soluta, est nobis non qui nesciunt aut ducimus autem, laborum officia fugit pariatur? Ab vel laborum facilis?",
            imgSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        },
        {
            id: "ed586832-b97b-4a1b-93ad-09921f9a8aab",
            name: "Chet",
            position: "Front End Developer",
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt iusto eos sequi fugiat maiores, non ipsa quas, sint accusamus perferendis eum tenetur! Id alias natus numquam adipisci culpa similique commodi!",
            imgSrc: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        },
    ];

    return (
        <section id="testimonials-carousel">
            <div id="testimonial-slides" className="relative h-full w-full">
                <div
                    id="slides-container"
                    className="flex h-full w-full overflow-hidden"
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="box-border block h-full w-full flex-shrink-0 flex-grow-0 object-cover transition-all delay-300 ease-in-out"
                        >
                            <TestimonialsBlockquote
                                name={testimonial.name}
                                position={testimonial.position}
                                quote={testimonial.quote}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div id="testimonial-navigation" className="flex justify-center">
                {testimonials.map((testimonial) => (
                    <button
                        key={testimonial.id}
                        onClick={() => console.log("Clicked!")}
                    >
                        <Avatar
                            isBordered
                            radius="none"
                            src={testimonial.imgSrc}
                            className="m-2 border-black"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
}
