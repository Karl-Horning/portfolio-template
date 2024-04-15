import { Card, Image, CardFooter, Button } from "@nextui-org/react";

/**
 * Props for the PortfolioCard component.
 * @typedef {Object} PortfolioCardProps
 * @property {string} imageAlt - Alt text for the image.
 * @property {string} imageSrc - Source URL of the image.
 * @property {string} tag - Tag for the portfolio item.
 * @property {string} title - Title of the portfolio item.
 */
interface PortfolioCardProps {
    imageAlt: string;
    imageSrc: string;
    tag: string;
    title: string;
}

/**
 * PortfolioCard component displays a portfolio item with an image, title, tag, and a "See More" button.
 * @param {PortfolioCardProps} props - Props for the PortfolioCard component.
 * @property {string} props.imageAlt - Alt text for the image.
 * @property {string} props.imageSrc - Source URL of the image.
 * @property {string} props.tag - Tag for the portfolio item.
 * @property {string} props.title - Title of the portfolio item.
 * @returns {JSX.Element} PortfolioCard component.
 */
export default function PortfolioCard({
    imageAlt,
    imageSrc,
    tag,
    title,
}: Readonly<PortfolioCardProps>) {
    return (
        <Card isFooterBlurred radius="none" className="border-none">
            <Image
                alt={imageAlt}
                className="object-cover"
                height="100%"
                src={imageSrc}
                width="100%"
                radius="none"
            />
            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
                <div>
                    <p className="text-tiny text-black">{title}</p>
                    <p className="text-tiny text-black">{tag}</p>
                </div>
                <Button
                    className="bg-black text-tiny text-white"
                    color="default"
                    radius="none"
                    size="sm"
                >
                    See More
                </Button>
            </CardFooter>
        </Card>
    );
}
