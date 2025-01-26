"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu open/close
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close the menu when a navigation item is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-32">
        {/* Logo */}
        <div className="text-4xl text-primary font-bold">
          <a href="#hero">JMY</a>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex gap-8 text-lg">
            <ul className="flex gap-8">
              <li>
                <a
                  href="#hero"
                  className="hover:text-green-500"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-green-500"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-green-500"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-green-500"
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-green-500"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <Button className="px-6">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1o7ivobqk25RrYfth5_KBJQdKcfmZWQav/view?usp=sharing"
              className="text-inherit no-underline" // Prevent styles from Link affecting the Button
            >
              Resume
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-6 bg-white py-8 px-6 shadow-md">
          <ul className="flex flex-col items-center text-lg">
            <li className="py-2">
              <a
                href="#hero"
                className="hover:text-green-500"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li className="py-2">
              <a
                href="#about"
                className="hover:text-green-500"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li className="py-2">
              <a
                href="#projects"
                className="hover:text-green-500"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li className="py-2">
              <a
                href="#skills"
                className="hover:text-green-500"
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li className="py-2">
              <a
                href="#contact"
                className="hover:text-green-500"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Resume Button for Mobile */}
          <Button className="px-6 mt-4">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1o7ivobqk25RrYfth5_KBJQdKcfmZWQav/view?usp=sharing"
              className="text-inherit no-underline" // Prevent styles from Link affecting the Button
            >
              Resume
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
