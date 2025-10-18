import React, { useState } from "react";

const Feedback = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your feedback!");
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-slate-900 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
                    Feedback Form
                </h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"
                />
                <textarea
                    name="message"
                    placeholder="Your Feedback"
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md h-24 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-all"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default Feedback;
