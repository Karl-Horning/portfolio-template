interface CvEntryProps {
    yearFrom: number;
    yearTo: number;
    title: string;
    location: string;
    description: string;
}

export default function CvEntry({
    yearFrom,
    yearTo,
    title,
    location,
    description,
}: CvEntryProps) {
    return (
        <div className="mb-5 gap-4 border-b-2 border-solid border-black pb-5 md:grid md:grid-cols-2">
            <div>
                <p className="text-sm">
                    {yearFrom}-{yearTo}
                </p>
            </div>
            <div>
                <h4 className="text-xl font-bold uppercase">{title}</h4>
            </div>
            <div>
                <p className="font-bold uppercase">{location}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
}
