"use client";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-neutral-900 text-white ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Image
                src="/main.png"
                alt="Matiks Logo"
                width={20}
                height={20}
                className="mr-2"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-[#bababa] hover:text-[#a9f99e] transition-colors duration-300 text-sm"
            >
              Blogs
            </a>
            <a
              href="/privacy-policy"
              className="text-[#bababa] hover:text-[#a9f99e] transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-[#bababa] hover:text-[#a9f99e] transition-colors duration-300"
              >
                Blogs
              </a>
              <a
                href="/privacy-policy"
                className="text-[#bababa] hover:text-[#a9f99e] transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
