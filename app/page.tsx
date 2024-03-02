"use client";
import Layout from "./components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 0.5 },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Layout>
      <motion.div
        className="text-center p-10 md:p-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl font-bold"
          variants={itemVariants}
          transition={{ delay: 0.4 }}
        >
          Welcome to Our Coffee Shop
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-800"
          variants={itemVariants}
          transition={{ delay: 0.6 }}
        >
          Discover your favorite coffee with us
        </motion.p>
        <motion.div
          className="mt-10"
          variants={itemVariants}
          transition={{ delay: 0.8 }}
        >
          <a
            href="/menu"
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition duration-300"
          >
            Explore Our Menu
          </a>
        </motion.div>
      </motion.div>
      {/* Additional engaging content */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-20 py-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="/images/coffee-cup.jpg" // Replace with your image path
          alt="Coffee Cup"
          className="w-full h-auto rounded-lg shadow-lg"
          variants={itemVariants}
          transition={{ delay: 1 }}
        />
        <motion.div
          className="flex flex-col justify-center"
          variants={itemVariants}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <p className="mt-4">
            We're dedicated to serving you the best cup of coffee. Whether
            you're starting your day or looking for that afternoon pick-me-up,
            our baristas are here to make your day great.
          </p>
          <p className="mt-2">
            With ethically sourced beans and a passion for coffee, we guarantee
            you'll find your next favorite drink with us.
          </p>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
