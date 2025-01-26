import Image from "next/image";
import profileImage from "../../public/images/john.jpeg";

interface SocialLink {
  icon: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: "/icons/facebook.svg",
    href: "https://web.facebook.com/johnmygot",
  },
  {
    icon: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/john-marie-ygot-19352a263/",
  },
  {
    icon: "/icons/github.svg",
    href: "https://github.com/jmarie21",
  },
  {
    icon: "/icons/gmail.svg",
    href: "mailto:johnmy.dev@gmail.com",
  },
];

export default function About() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-auto bg-gray-50 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 lg:px-32">
        {/* Left Column (Text) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold mb-4">Hello there, I&apos;m</h1>
          <h2 className="text-3xl sm:text-4xl text-primary font-bold mb-4">
            John Marie Ygot
          </h2>
          <p className="text-gray-600 mb-4">
            I&apos;m a junior web developer with a passion for learning and
            building web applications. I enjoy turning ideas into interactive,
            user-friendly websites and am always eager to improve my skills.
            Let&apos;s create something great together!
          </p>

          {/* Social Icons */}

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full"
              >
                <Image
                  src={social.icon}
                  alt="Social Links"
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="md:w-1/2 relative w-full mt-8 md:mt-0">
          <Image
            src={profileImage}
            alt="My Image"
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
