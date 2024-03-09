"use client";

import Layout from "./components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";

interface CoffeeDetail {
  emoji: string;
  message: string;
}

// Define the type for the coffeeDetails object
interface CoffeeDetails {
  [key: string]: CoffeeDetail;
}

const coffeeDetails: CoffeeDetails = {
  Espresso: {
    emoji: "☕",
    message: "Strong and straightforward, just like your choices.",
  },
  Latte: {
    emoji: "🥛",
    message: "Smooth and creamy, for a gentle start to your day.",
  },
  Cappuccino: {
    emoji: "🍂",
    message: "Perfectly balanced, as all things should be.",
  },
  Americano: {
    emoji: "💧",
    message: "Simplicity is the ultimate sophistication.",
  },
  FlatWhite: {
    emoji: "🤍",
    message: "Smooth, rich, and velvety, for the refined palate.",
  },
  Mocha: {
    emoji: "🍫",
    message: "For those who enjoy the sweeter things in life.",
  },
};

export default function Home() {
  const [coffeePreference, setCoffeePreference] = useState<string>("");

  const fadeInUp = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const handleCoffeeSelection = (coffee: string) => {
    setCoffeePreference(coffee);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center space-y-12 min-h-screen  px-5">
        <motion.div
          className="text-center space-y-5"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-bold">Explore the Art of Coffee</h1>
          <p className="text-xl">A journey through flavors and aromas</p>
        </motion.div>

        <motion.div
          className="w-full max-w-4xl"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            What's Your Coffee?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(coffeeDetails).map((coffee, index) => (
              <motion.button
                key={index}
                className="px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition-all"
                onClick={() => handleCoffeeSelection(coffee)}
              >
                {coffee}
              </motion.button>
            ))}
          </div>
          {coffeePreference && (
            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-2xl">
                {coffeeDetails[coffeePreference].emoji}{" "}
                <span className="font-bold">{coffeePreference}</span>
              </p>
              <p className="mt-4">{coffeeDetails[coffeePreference].message}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          className="w-full border-t border-b border-gray-700 py-12"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Our Philosophy</h2>
            <p className="mt-4 text-xl text-center">
              Simplicity and elegance, both in our coffee and our design. Every
              cup is a masterpiece.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full py-12"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold">Join Us</h2>
            <p className="mt-4 text-xl">
              Be part of our community and celebrate the culture of coffee.
            </p>
            <button className="mt-6 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-700 transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
