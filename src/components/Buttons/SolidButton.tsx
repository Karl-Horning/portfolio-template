import { Button } from "@nextui-org/react";

/**
 * Props for the SolidButton component.
 */
interface SolidButtonProps {
    /**
     * The title text displayed on the button.
     */
    title: string;
}

/**
 * Component representing a solid button.
 * @param {SolidButtonProps} props - Props for the SolidButton component.
 * @param {SolidButtonProps.title} string - The title to display on the button.
 * @returns {JSX.Element} JSX representing the SolidButton component.
 */
export default function SolidButton({ title }: Readonly<SolidButtonProps>) {
    return (
        <Button
            size="lg"
            radius="none"
            variant="bordered"
            className="border-black bg-black uppercase text-white"
        >
            {title}
        </Button>
    );
}
