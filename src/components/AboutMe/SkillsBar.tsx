import { Progress } from "@nextui-org/react";

interface SkillsBarProps {
    label: string;
    value: number;
}

export default function SkillsBar({ label, value }: SkillsBarProps) {
    return (
        <Progress
            className="pb-5 uppercase"
            classNames={{ indicator: "bg-black" }}
            color="default"
            label={label}
            radius="none"
            showValueLabel={true}
            size="lg"
            value={value}
            maxValue={100}
            formatOptions={{
                style: "percent",
            }}
        />
    );
}
