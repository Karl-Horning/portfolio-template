"use client";

import Header from "@/components/Header/Header";
import { Input, Textarea } from "@nextui-org/react";
import { SolidButton } from "@/components/Buttons";

/**
 * ContactForm component for displaying a contact form.
 * @component
 * @returns {JSX.Element}
 */
export default function ContactForm() {
    return (
        <section id="contact-form" className="py-40 md:px-10">
            <div className="container mx-auto">
                <Header title="Contact Me" />

                {/* Contact Form */}
                <form
                    action="/submit-contact"
                    method="post"
                    className="bg-slate-100 px-3 py-8 md:p-24"
                >
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        {/* Name Input */}
                        <Input
                            isClearable
                            isRequired
                            className="mb-8 bg-white"
                            label="Name"
                            radius="none"
                            type="text"
                            variant="bordered"
                        />

                        {/* Email Input */}
                        <Input
                            isClearable
                            isRequired
                            className="mb-8 bg-white"
                            label="Email"
                            radius="none"
                            type="email"
                            variant="bordered"
                        />
                    </div>

                    {/* Subject Input */}
                    <div className="mb-8">
                        <Input
                            isClearable
                            isRequired
                            className="bg-white"
                            label="Subject"
                            radius="none"
                            type="text"
                            variant="bordered"
                        />
                    </div>

                    {/* Message Textarea */}
                    <Textarea
                        isRequired
                        className="mb-8 bg-white"
                        label="Message"
                        minRows={10}
                        radius="none"
                        variant="bordered"
                    />

                    {/* Submit Button */}
                    <SolidButton title="Send" />
                </form>
            </div>
        </section>
    );
}
