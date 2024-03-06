"use client";
import Layout from "../components/Layout";
import { useState } from "react";

const FAQItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-5 last:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full px-4 py-3 text-left bg-white shadow rounded-lg ${
          isOpen ? "mb-3" : ""
        }`}
      >
        <span className="font-medium text-lg">{title}</span>
        <span className={isOpen ? "transform rotate-180" : ""}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-gray-100 rounded-lg">
          <p className="text-gray-700">{content}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <Layout>
      <div className="py-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          <FAQItem
            title="What are your opening hours?"
            content="Our cafe is open from 8 AM to 8 PM on weekdays, and 9 AM to 10 PM on weekends. Perfect for early birds and night owls alike."
          />
          <FAQItem
            title="Do you offer any vegan options?"
            content="Yes, we're proud to offer a selection of vegan delights. From our signature vegan lattes to a variety of plant-based pastries, there's something for everyone."
          />
          <FAQItem
            title="Can I book the space for private events?"
            content="Absolutely! Our space is available for private events, workshops, and meetings. Contact us to discuss your needs and how we can make your event special."
          />
          <FAQItem
            title="Do you have Wi-Fi?"
            content="Yes, we offer free Wi-Fi to all our customers. Enjoy a cup of coffee while you work or browse."
          />
          <FAQItem
            title="What is your return policy?"
            content="Customer satisfaction is our top priority. If you're not happy with your purchase, please bring it back within 30 days for a full refund."
          />
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg">
            Can't find the answer you're looking for? Contact us directly and
            we'll be happy to help.
          </p>
          <a
            href="mailto:contact@coffeeshop.com"
            className="mt-2 inline-block bg-black text-white font-medium py-2 px-4 rounded-lg"
          >
            Email Us
          </a>
        </div>
      </div>
    </Layout>
  );
}
