"use client";

import Layout from "./components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const hoverAnimation = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.3 } },
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center space-y-10 min-h-screen">
        <motion.div
          className="text-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h1
            className="text-5xl font-bold"
            variants={hoverAnimation}
            whileHover="hover"
            whileTap="tap"
          >
            Explore the Art of Coffee
          </motion.h1>
          <motion.p
            className="mt-4 text-xl"
            variants={hoverAnimation}
            whileHover="hover"
            whileTap="tap"
          >
            A journey through flavors and aromas
          </motion.p>
        </motion.div>

        <motion.section
          className="max-w-4xl text-center p-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-3xl font-bold"
            variants={hoverAnimation}
            whileHover="hover"
            whileTap="tap"
          >
            Our Philosophy
          </motion.h2>
          <motion.p variants={hoverAnimation} whileHover="hover" whileTap="tap">
            We believe in simplicity and elegance, both in our coffee and our
            design. Every cup is a masterpiece, crafted with passion and
            precision.
          </motion.p>
        </motion.section>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {[
            "Espresso",
            "Latte",
            "Cappuccino",
            "Americano",
            "Flat White",
            "Mocha",
          ].map((coffee, index) => (
            <motion.div
              key={index}
              className="p-5 border border-gray-800 hover:border-gray-500 transition-all cursor-pointer"
              variants={hoverAnimation}
              whileHover="hover"
              whileTap="tap"
            >
              <h3 className="text-2xl font-bold">{coffee}</h3>
              <p>
                Delve into the essence of coffee with our {coffee.toLowerCase()}
                .
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center py-20"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-4xl font-bold"
            variants={hoverAnimation}
            whileHover="hover"
            whileTap="tap"
          >
            Join the Movement
          </motion.h2>
          <motion.p
            className="mt-4"
            variants={hoverAnimation}
            whileHover="hover"
            whileTap="tap"
          >
            Be part of our community. Discover more, enjoy member-exclusive
            offers, and celebrate the culture of coffee.
          </motion.p>
          <motion.button
            className="mt-5 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition duration-300"
            variants={hoverAnimation}
            whileHover="hover"
            whileTap="tap"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </Layout>
  );
}
