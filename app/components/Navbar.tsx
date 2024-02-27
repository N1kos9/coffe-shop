// components/Navbar.js

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <div className="text-lg font-bold">Coffee Shop</div>
      <div>
        <Link href="/" className="px-4 hover:text-gray-300">
          Home
        </Link>
        <Link href="/menu" className="px-4 hover:text-gray-300">
          Menu
        </Link>
        <Link href="/about" className="px-4 hover:text-gray-300">
          About Us
        </Link>
        <Link href="/blog" className="px-4 hover:text-gray-300">
          Blog
        </Link>
        <Link href="/contact" className="px-4 hover:text-gray-300">
          Contact
        </Link>
        <Link href="/faq" className="px-4 hover:text-gray-300">
          FAQ
        </Link>
      </div>
    </nav>
  );
}
