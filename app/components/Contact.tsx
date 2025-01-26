import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-16 flex flex-col justify-center items-center text-center min-h-screen">
      <div className="space-y-6 container mx-auto text-center px-6 lg:px-32">
        {/* Heading */}
        <h3 className="text-primary text-xl font-semibold">Get in touch</h3>
        <h2 className="text-4xl font-bold mb-4 mx-auto">
          Let&apos;s create something amazing together
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Ready to bring your next project to life? Let&apos;s connect and
          discuss how I can help you achieve your goals.
        </p>

        {/* Button */}
        <Button className="px-8 py-6 text-lg">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/john-marie-ygot-19352a263/"
          >
            Contact Me
          </Link>
        </Button>
      </div>
    </section>
  );
}
