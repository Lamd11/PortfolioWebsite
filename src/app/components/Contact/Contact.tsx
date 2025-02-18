"use client";
import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section className="mt-12 flex h-full w-full items-center justify-center text-White sm:mt-0">
            <div className="flex h-full w-full flex-col items-center justify-center sm:flex-row">
                <div className="flex h-full w-full items-center justify-center sm:w-1/2">
                   <ContactIntro/>
                </div>
                <div className="flex h-full w-full items-center justify-center sm:w-1/2">
                    <ContactForm/>
                </div>

            </div>
        </section>
    );
};

export default Contact;
