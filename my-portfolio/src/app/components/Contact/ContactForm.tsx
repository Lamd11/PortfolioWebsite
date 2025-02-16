"use client";

import React, { useState } from 'react'

const ContactForm = () => {

    {/* Template for data */}
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    {/* Status. If it's nothing, null, else it'll have a error/success code */}
    const [status, setStatus] = useState<string | null>(null)

    {/* Everytime user updates the form */}
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    {/* Send to api/contact endpoint */}
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        const emailData = {
            ...formData,
            subject: `Web Portfolio | ${formData.subject}`,
        }

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emailData),
        });

        if (response.ok) {
            setStatus("Email sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
            setStatus("Failed to send email. Please try again.");
        }
    };


    return (
        <section className="mx-auto flex h-screen w-[90%] items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg rounded-lg bg-white p-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">Get in Touch</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mb-4 w-full rounded-md border p-2"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mb-4 w-full rounded-md border p-2"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mb-4 w-full rounded-md border p-2"
                />
                <textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mb-4 h-52 w-full rounded-md border p-2"
                />
                <button
                    type="submit"
                    className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
                >
                    Send Email
                </button>
                {status && <p className="mt-4 text-center text-gray-700">{status}</p>}

            </form>
        </section>
    );
}

export default ContactForm;