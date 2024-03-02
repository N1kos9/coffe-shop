// components/Navbar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Toggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white shadow-md">
      <div className="text-2xl font-bold">Coffee Shop</div>
      <div className="flex items-center gap-4">
        {navLinks.map((link) => {
          const isActive = currentPath === link.path;
          // Instead of changing the component, style the link uniformly and conditionally render a class for active state
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`inline-flex items-center px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
                isActive ? "bg-white text-black" : "text-xl hover:bg-gray-700 "
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        {/* Theme Toggle Button */}
        <ModeToggle />
      </div>
    </nav>
  );
}
