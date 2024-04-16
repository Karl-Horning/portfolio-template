/**
 * Footer component displays the copyright information in the footer section.
 * @returns {JSX.Element} JSX element representing the footer.
 */
export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <section
            id="newsletter"
            className="border-t-2 border-white bg-black px-10 py-10 text-white"
        >
            <p className="text-center">
                Copyright &copy;{" "}
                {currentYear === 2024 ? "2024" : `2024 - ${currentYear}`} Karl
                Horning. All Rights Reserved.
            </p>
        </section>
    );
}
