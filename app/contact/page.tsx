"use client";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementation for submitting the form data
    alert("Thank you for your message. We will get back to you shortly!");
    // Reset the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
