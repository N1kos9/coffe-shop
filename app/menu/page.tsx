"use client";
// pages/menu.tsx
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Menu() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <Layout>
      <div className="px-5 py-10 md:p-10">
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Menu
        </motion.h2>
        <motion.div
          className="mt-6 flex flex-col items-center md:items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Featured Drink */}
          <motion.div
            className="my-8 p-4 rounded-lg shadow-lg bg-gray-800 text-white w-full max-w-lg mx-auto text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-2">Featured Drink</h3>
            <p>Seasonal Pumpkin Spice Latte - $6</p>
          </motion.div>
          <motion.h4
            className="text-xl font-semibold mt-10 mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Coffee
          </motion.h4>
          {/* Dynamic alignment for responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg mx-auto">
            {/* Each item as a motion component for animation */}
            {[
              "Espresso - $3",
              "Americano - $4",
              "Cappuccino - $4.5",
              "Latte - $4.5",
              "Mocha - $5",
            ].map((item, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="my-2 text-center"
              >
                {item}
              </motion.p>
            ))}
          </div>
          <motion.h4
            className="text-xl font-semibold mt-10 mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Teas & Others
          </motion.h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg mx-auto">
            {[
              "Green Tea - $3",
              "Black Tea - $3",
              "Herbal Tea - $3.5",
              "Hot Chocolate - $4",
            ].map((item, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="my-2 text-center"
              >
                {item}
              </motion.p>
            ))}
          </div>
          {/* Additional content and alignment for mobile-friendliness */}
          <motion.div
            className="my-8 p-4 rounded-lg shadow-lg bg-gray-900 text-white w-full max-w-lg mx-auto text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <h3 className="text-xl font-bold mb-2">Special Offer</h3>
            <p>Buy any coffee and get 50% off any pastry!</p>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
