// components/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Toggle";
export default function Navbar() {
  // Additional styles for light theme
  return (
    <nav className={`flex justify-between items-center p-4 `}>
      <div className="text-lg font-bold">Coffee Shop</div>
      <div>
        <Link href="/" className={`px-4 `}>
          Home
        </Link>
        <Link href="/menu" className={`px-4 `}>
          <Button>Menu</Button>
        </Link>
        <Link href="/about" className={`px-4 `}>
          About Us
        </Link>
        <Link href="/blog" className={`px-4 `}>
          Blog
        </Link>
        <Link href="/contact" className={`px-4 `}>
          Contact
        </Link>
        <Link href="/faq" className={`px-4 `}>
          FAQ
        </Link>
        {/* Theme Toggle Button */}
        <ModeToggle />
      </div>
    </nav>
  );
}
