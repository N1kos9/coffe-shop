"use client";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto px-5 py-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12"
        >
          Blog Insights
        </motion.h2>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <article className="mb-12">
            <h3 className="text-3xl font-semibold mb-4">
              Elevating Coffee: The Journey from Bean to Brew
            </h3>
            <p className="text-gray-700 mb-6">
              Dive deep into the art and science behind your favorite coffee.
              From the meticulous selection of beans to the precision in
              brewing, discover how each step contributes to the perfect cup.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300 ease-in-out"
            >
              Continue Reading →
            </a>
          </article>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <h4 className="text-xl font-semibold mb-3">
                  Title Placeholder
                </h4>
                <p className="text-gray-600 mb-4">
                  A brief introduction to the topic, capturing the essence and
                  inviting further reading.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300 ease-in-out"
                >
                  Read More
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}
