// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
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

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between md:items-center md:flex-row flex-col items-center">
        <div className="text-2xl font-bold">Coffee Shop</div>
        <button
          className="md:hidden p-4 text-xl mt-4 border rounded-lg "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Replace with an appropriate icon */}
          <span className="">{isMobileMenuOpen ? "Close" : "Menu"}</span>
        </button>
        <div
          className={`md:flex ${
            isMobileMenuOpen ? "flex" : "hidden"
          } flex-col md:flex-row md:items-center gap-4 w-full md:w-auto md:p-2 p-8`}
        >
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`block text-center md:inline-block px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
                  isActive
                    ? "bg-white text-black"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Consider placement of the ModeToggle button in desktop view */}
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
