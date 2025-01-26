import { Button } from "@/components/ui/button";
import Image from "next/image";
import profile from "../../public/images/john2.jpeg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-screen bg-gray-50 px-6">
      <div className="flex flex-col items-center gap-4">
        {/* Round and Small Image */}
        <Image
          src={profile}
          alt="John's Profile Picture"
          className="w-40 h-40 rounded-full object-cover"
        />
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Hi, I&apos;m John.
        </h1>
      </div>

      <h1 className="text-3xl sm:text-4xl text-secondary font-bold mt-4">
        I create innovative solutions.
      </h1>

      <p className="text-gray-500 mt-4 max-w-md sm:max-w-xl mx-4">
        I love turning ideas into real products. If you&apos;ve got something in
        mind, let&apos;s collaborate and bring ideas to life together.
      </p>

      <Button className="mt-8">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/john-marie-ygot-19352a263/"
        >
          Let&apos;s connect
        </Link>
      </Button>
    </section>
  );
}
