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
      <div className="p-10">
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Menu
        </motion.h2>
        <motion.div
          className="mt-6 flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Featured Drink */}
          <motion.div
            className="my-8 p-4 rounded-lg shadow-lg bg-gray-800 text-white w-full max-w-md text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-2">Featured Drink</h3>
            <p>Seasonal Pumpkin Spice Latte - $6</p>
          </motion.div>
          <motion.h4
            className="self-start w-full max-w-md text-xl font-semibold mt-10 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Coffee
          </motion.h4>
          <motion.p variants={itemVariants} className="my-2">
            Espresso - $3
          </motion.p>
          <motion.p variants={itemVariants} className="my-2">
            Americano - $4
          </motion.p>
          <motion.p variants={itemVariants} className="my-2">
            Cappuccino - $4.5
          </motion.p>
          <motion.p variants={itemVariants} className="my-2">
            Latte - $4.5
          </motion.p>
          <motion.p variants={itemVariants} className="my-2">
            Mocha - $5
          </motion.p>
          <motion.h4
            className="self-start w-full max-w-md text-xl font-semibold mt-10 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Teas & Others
          </motion.h4>
          <motion.p variants={itemVariants} className="my-2">
            Green Tea - $3
          </motion.p>
          <motion.p variants={itemVariants} className="my-2">
            Black Tea - $3
          </motion.p>
          <motion.p variants={itemVariants} className="my-2">
            Herbal Tea - $3.5
          </motion.p>
          <motion.p variants={itemVariants} className="my-2">
            Hot Chocolate - $4
          </motion.p>
        </motion.div>
      </div>
    </Layout>
  );
}
