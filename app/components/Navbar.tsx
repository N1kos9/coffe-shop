// components/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [theme, setTheme] = useState("dark"); // Default theme is set to 'dark'

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
    document.documentElement.setAttribute("data-theme", theme); // Toggle theme attribute in HTML
  };

  // Additional styles for light theme
  const navbarStyles =
    theme === "dark" ? "bg-black text-white" : "bg-white text-black";
  const linkHoverStyle =
    theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-700";

  return (
    <nav className={`flex justify-between items-center p-4 ${navbarStyles}`}>
      <div className="text-lg font-bold">Coffee Shop</div>
      <div>
        <Link href="/" className={`px-4 ${linkHoverStyle}`}>
          Home
        </Link>
        <Link href="/menu" className={`px-4 ${linkHoverStyle}`}>
          <Button>Menu</Button>
        </Link>
        <Link href="/about" className={`px-4 ${linkHoverStyle}`}>
          About Us
        </Link>
        <Link href="/blog" className={`px-4 ${linkHoverStyle}`}>
          Blog
        </Link>
        <Link href="/contact" className={`px-4 ${linkHoverStyle}`}>
          Contact
        </Link>
        <Link href="/faq" className={`px-4 ${linkHoverStyle}`}>
          FAQ
        </Link>
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="ml-4 px-4 py-2 border rounded">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
