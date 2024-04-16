import Header from "@/components/Header/Header";
import { Input } from "@nextui-org/react";
import { OutlineButton } from "@/components/Buttons";

/**
 * Newsletter component.
 * @returns {JSX.Element} JSX element representing the Newsletter component.
 */
export default function Newsletter() {
    return (
        <section id="newsletter" className="bg-black px-10 py-40 text-white">
            <div className="container mx-auto">
                <Header title="Newsletter" whiteHeader />

                <form action="" className="items-center text-center">
                    <p className="mb-10 text-xl font-bold uppercase">
                        Subscribe to get my newsletter
                    </p>

                    <div className="mb-10 flex items-center justify-center">
                        <Input
                            isClearable
                            isRequired
                            className="max-w-lg bg-white text-black"
                            label="Email"
                            radius="none"
                            type="email"
                            variant="bordered"
                        />
                    </div>

                    <OutlineButton
                        title="Subscribe"
                        className="border-white text-white"
                    />
                </form>
            </div>
        </section>
    );
}
