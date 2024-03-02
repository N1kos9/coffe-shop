// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/Toggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
    { label: "FAQ", path: "/faq" },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: -200,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between md:items-center md:flex-row flex-col items-center">
        <div className="text-2xl font-bold">Coffee Shop</div>
        <button
          className="md:hidden p-4 text-xl mt-4 border rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span>{isMobileMenuOpen ? "Close" : "Menu"}</span>
        </button>
        {/* Always visible on desktop */}
        <div className="hidden md:flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto md:p-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.path}
              href={link.path}
              whileHover="hover"
              variants={linkVariants}
              className={`cursor-pointer block text-center md:inline-block px-4 py-2 rounded-md font-medium ${
                currentPath === link.path
                  ? "bg-white text-black"
                  : "hover:bg-gray-700 hover:text-white"
              } transition-colors duration-300`}
            >
              {link.label}
            </motion.a>
          ))}
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="md:hidden flex flex-col items-center gap-4 w-full p-8"
            >
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} passHref>
                  <motion.a
                    whileHover="hover"
                    variants={linkVariants}
                    className={`cursor-pointer block text-center px-4 py-2 rounded-md font-medium ${
                      currentPath === link.path
                        ? "bg-white text-black"
                        : "hover:bg-gray-700 hover:text-white"
                    } transition-colors duration-300`}
                  >
                    {link.label}
                  </motion.a>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
