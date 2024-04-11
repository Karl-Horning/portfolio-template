import style from "./Header.module.css";

/**
 * Header component props
 * @typedef {Object} HeaderProps
 * @property {string} title - The title to be displayed in the header
 * @property {boolean} [whiteHeader=false] - Whether the header text and line should be white
 */
interface HeaderProps {
    title: string;
    whiteHeader?: boolean;
}

/**
 * Header component displays a title with an optional white header style
 * @param {HeaderProps} props - Props for the Header component
 * @returns {JSX.Element} Header component JSX
 */
export default function Header({ title, whiteHeader = false }: HeaderProps) {
    /**
     * Get the class name for the title element
     * @returns {string} The class name for the title element
     */
    const getTitleClassName = () => {
        return `text-center text-4xl font-bold uppercase ${whiteHeader ? "text-white" : "text-black"}`;
    };

    /**
     * Get the class name for the hr element
     * @returns {string} The class name for the hr element
     */
    const getHrClassName = () => {
        return `${style.hr} ${style["hr-line"]} ${whiteHeader ? style["hr-white"] : style["hr-black"]}`;
    };

    return (
        <div className="my-20">
            {/* Render the title with dynamic class name */}
            <h2 className={getTitleClassName()}>{title}</h2>
            {/* Render the horizontal line with dynamic class name */}
            <hr className={getHrClassName()} />
        </div>
    );
}
