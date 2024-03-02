import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Coffee Shop</h2>
            <p className="text-sm mt-2">
              Crafting your perfect coffee experience.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <h3 className="text-md font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li>
                <a href="/about" className="hover:text-gray-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-gray-700">
                  Menu
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gray-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 lg:mt-0">
            <h3 className="text-md font-semibold">Follow Us</h3>
            <div className="flex mt-2">
              <a
                href="https://instagram.com"
                className="mr-2 hover:text-gray-700"
              >
                <FaInstagram size="20" />
              </a>
              <a
                href="https://twitter.com"
                className="mx-2 hover:text-gray-700"
              >
                <FaTwitter size="20" />
              </a>
              <a
                href="https://facebook.com"
                className="mx-2 hover:text-gray-700"
              >
                <FaFacebookF size="20" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t pt-4 border-gray-200">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
