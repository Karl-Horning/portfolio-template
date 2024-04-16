import QuotationMark from "@/components/Testimonials/QuotationMark";

/**
 * Props for the TestimonialsBlockquote component.
 * @typedef {Object} TestimonialsBlockquoteProps
 * @property {string} name - The name of the person giving the testimonial.
 * @property {string} position - The position or title of the person giving the testimonial.
 * @property {string} quote - The testimonial quote.
 */
interface TestimonialsBlockquoteProps {
    name: string;
    position: string;
    quote: string;
}

/**
 * TestimonialsBlockquote component displays a blockquote with a testimonial quote and the name and position of the person giving the testimonial.
 * @param {TestimonialsBlockquoteProps} props - Props for the TestimonialsBlockquote component.
 * @property {string} props.name - The name of the person giving the testimonial.
 * @property {string} props.position - The position or title of the person giving the testimonial.
 * @property {string} props.quote - The testimonial quote.
 * @returns {JSX.Element} TestimonialsBlockquote component.
 */
export default function TestimonialsBlockquote({
    name,
    position,
    quote,
}: Readonly<TestimonialsBlockquoteProps>) {
    <blockquote className="mb-5 text-xl">
        <p className="mb-10">
            <QuotationMark />
            {quote}
            <QuotationMark closingQuote={true} />
        </p>

        <cite className="font-bold">
            {name}, {position}
        </cite>
    </blockquote>;
}
