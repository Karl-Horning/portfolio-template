/**
 * Props for the QuotationMark component.
 * @typedef {Object} QuotationMarkProps
 * @property {boolean} [closingQuote] - Whether the quotation mark is a closing quote. Defaults to false.
 */
interface QuotationMarkProps {
    closingQuote?: boolean;
}

/**
 * QuotationMark component displays a quotation mark icon.
 * @param {QuotationMarkProps} props - Props for the QuotationMark component.
 * @param {boolean} [closingQuote] - Whether the quotation mark is a closing quote. Defaults to false.
 * @returns {JSX.Element} QuotationMark component.
 */
export default function QuotationMark({ closingQuote }: QuotationMarkProps) {
    return (
        <span
            className={`${closingQuote ? "float-right" : "float-left"} pl-1 pr-2 pt-1`}
        >
            <svg
                className={`mb-4 h-8 w-8 ${closingQuote ? "" : "rotate-180"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
        </span>
    );
}
