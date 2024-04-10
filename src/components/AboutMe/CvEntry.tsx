/**
 * Props for the CvEntry component.
 */
interface CvEntryProps {
    /**
     * Start year of the entry.
     */
    yearFrom: number;
    /**
     * End year of the entry.
     */
    yearTo: number;
    /**
     * Title of the entry.
     */
    title: string;
    /**
     * Location of the entry.
     */
    location: string;
    /**
     * Description of the entry.
     */
    description: string;
    /**
     * Whether to display a bottom border or not (default is true).
     */
    bottomBorder?: boolean;
}

/**
 * Component representing an entry in the education and experience sections.
 * @param {CvEntryProps} props - Props for the CvEntry component.
 * @param {number} props.yearFrom - Start year of the entry.
 * @param {number} props.yearTo - End year of the entry.
 * @param {string} props.title - Title of the entry.
 * @param {string} props.location - Location of the entry.
 * @param {string} props.description - Description of the entry.
 * @param {boolean} [props.bottomBorder=true] - Whether to display a bottom border or not.
 * @returns {JSX.Element} JSX representing the CvEntry component.
 */
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
            {/* Year */}
            <div className="col-span-1">
                <p className="text-sm">
                    {yearFrom}-{yearTo}
                </p>
            </div>

            {/* Title */}
            <div className="col-span-2">
                <h4 className="text-xl font-bold uppercase">{title}</h4>
            </div>

            {/* Location */}
            <div className="col-span-1">
                <p className="font-bold uppercase">{location}</p>
            </div>

            {/* Description */}
            <div className="col-span-2">
                <p>{description}</p>
            </div>
        </div>
    );
}
