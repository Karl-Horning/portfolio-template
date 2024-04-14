import { Button } from "@nextui-org/react";

/**
 * Props for the OutlineButton component.
 * @prop {string} title - The title text displayed on the button.
 */
interface OutlineButtonProps {
    title: string;
}

/**
 * Component representing an outline button.
 * @param {OutlineButtonProps} props - Props for the OutlineButton component.
 * @returns {JSX.Element} JSX representing the OutlineButton component.
 */
export default function OutlineButton({ title }: Readonly<OutlineButtonProps>) {
    return (
        <Button
            size="lg"
            radius="none"
            variant="ghost"
            className="border-black uppercase text-black"
        >
            {title}
        </Button>
    );
}
