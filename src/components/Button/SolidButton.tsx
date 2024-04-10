import { Button } from "@nextui-org/react";

interface SolidButtonProps {
    title: string;
}

export default function SolidButton({ title }: SolidButtonProps) {
    return (
        <Button
            size="lg"
            radius="none"
            className="bg-black uppercase text-white"
        >
            {title}
        </Button>
    );
}
