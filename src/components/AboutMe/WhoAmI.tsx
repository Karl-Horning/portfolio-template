import { SolidButton } from "@/components/Buttons";

/**
 * Component representing the WhoAmI section.
 * @returns {JSX.Element} JSX representing the WhoAmI section.
 */
export default function WhoAmI() {
    return (
        <div className="pb-5">
            <h3 className="pb-5 text-2xl font-bold uppercase">Who Am I?</h3>

            <p className="pb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam doloribus sit porro vel ut quo quidem, minima error?
                Aspernatur quasi animi nesciunt reprehenderit quos fugit et
                nobis distinctio, voluptatem illo.
            </p>

            <p className="pb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                facilis. Quis officiis corporis, deleniti esse quasi
                perspiciatis? Accusantium perspiciatis, dolorum sunt, libero,
                eos quidem voluptas rerum voluptatum ipsa laboriosam quae?
            </p>

            <p className="pb-5">
                <SolidButton title="Download my CV" />
            </p>
        </div>
    );
}
