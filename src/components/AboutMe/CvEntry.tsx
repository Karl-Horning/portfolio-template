interface CvEntryProps {
    yearFrom: number;
    yearTo: number;
    title: string;
    location: string;
    description: string;
    bottomBorder?: boolean;
}

export default function CvEntry({
    yearFrom,
    yearTo,
    title,
    location,
    description,
    bottomBorder = true,
}: CvEntryProps) {
    return (
        <div
            className={`mb-5 gap-4 ${bottomBorder ? "border-b-2 border-solid border-black" : ""}  pb-5 md:grid md:grid-cols-3`}
        >
            <div className="col-span-1">
                <p className="text-sm">
                    {yearFrom}-{yearTo}
                </p>
            </div>
            <div className="col-span-2">
                <h4 className="text-xl font-bold uppercase">{title}</h4>
            </div>
            <div className="col-span-1">
                <p className="font-bold uppercase">{location}</p>
            </div>
            <div className="col-span-2">
                <p>{description}</p>
            </div>
        </div>
    );
}
