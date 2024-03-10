"use client";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

export default function About() {
  // Define animation variants for the sections
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Use the motion.div component with variants for animation */}
        <motion.section
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h2 className="text-5xl font-extrabold mb-6">Discover Our Story</h2>
          <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-4xl">
            Born from a passion for the rich traditions of coffee culture,
            Coffee Shop was established in 2024 to bring a unique blend of
            innovation and tradition to the heart of the city. Here, every cup
            of coffee tells a story, inviting you on a journey through the art
            and science of coffee making.
          </p>
        </motion.section>

        <motion.section
          className="mb-20 bg-gray-100 py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h3 className="text-4xl font-semibold text-center mb-10">
            Why We Stand Out
          </h3>
          <div className="grid md:grid-cols-3 gap-10 text-center px-4">
            {/* Use the motion.div component for each feature item with variants */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow"
              variants={itemVariant}
            >
              <h4 className="text-2xl font-semibold mb-4">Craftsmanship</h4>
              <p className="text-gray-600">
                Our dedication to the craft of coffee making ensures that every
                sip offers a remarkable experience.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow"
              variants={itemVariant}
            >
              <h4 className="text-2xl font-semibold mb-4">Innovation</h4>
              <p className="text-gray-600">
                We constantly explore innovative brewing methods to enhance your
                coffee experience.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow"
              variants={itemVariant}
            >
              <h4 className="text-2xl font-semibold mb-4">Community</h4>
              <p className="text-gray-600">
                At the heart of our mission is a commitment to fostering
                community connections over great coffee.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Repeat the pattern for other sections as needed */}

        {/* Example for another section */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h3 className="text-4xl font-semibold text-center mb-10">
            Our Journey
          </h3>
          <p className="text-lg text-gray-600 text-center mx-auto leading-relaxed max-w-4xl">
            From our first store to becoming a beloved part of local life, our
            journey is a testament to our passion for coffee and community. We
            invite you to be part of our continuing story as we explore new
            horizons in coffee culture together.
          </p>
        </motion.section>

        {/* Continue with other sections as demonstrated */}
      </div>
    </Layout>
  );
}
