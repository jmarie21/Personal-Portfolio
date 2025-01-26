import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 lg:px-32">
        {/* Left Column: Logo and Subheading */}
        <div className="space-y-4 mb-8 md:mb-0 flex flex-col justify-start md:w-1/2">
          <div className="text-4xl font-bold">
            <a href="#hero">JMY</a>
          </div>
          <p>
            Creating impactful digital experiences and solutions. Let&apos;s
            build something together!
          </p>
        </div>

        {/* Right Column: Quick Links and Social Links */}
        <div className="flex flex-col gap-16 md:flex-row md:w-1/2 justify-end">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-green-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-200">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-green-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-green-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Social Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  target="_blank"
                  href="https://web.facebook.com/johnmygot"
                  className="hover:text-green-200"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://github.com/jmarie21"
                  className="hover:text-green-200"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/john-marie-ygot-19352a263/"
                  className="hover:text-green-200"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      {/* Footer Credits */}
      <div className="text-center">
        <p>&copy; 2025 John Marie Ygot. All rights reserved.</p>
        <p className="text-sm">Designed and developed by John Marie Ygot</p>
      </div>
    </footer>
  );
}
