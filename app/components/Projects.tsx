import { Button } from "@/components/ui/button";
import { projects } from "../data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="min-h-auto flex flex-col justify-center items-center py-16">
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 lg:px-32">
        {/* Section Title */}
        <h2 className="text-4xl text-primary font-bold text-center">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh
          neque, suscipit eget augue at, commodo eleifend neque.
        </p>

        {/* Project Card */}
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col md:flex-row items-center gap-8 w-full bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={project.image}
                alt={project.name}
                className="w-full h-auto rounded-lg object-cover"
                width={500}
                height={500}
              />
            </div>

            <div className="md:w-1/2 flex flex-col justify-between">
              {/* Heading and Subheading */}
              <h3 className="text-2xl text-primary font-semibold mb-4">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* HTML Tag Below the Card */}
              <div className="flex flex-wrap gap-4 mb-8">
                {project.tools.map((tool) => (
                  <div
                    key={tool}
                    className="border rounded-md border-green-500 px-4 py-2 text-sm font-medium text-green-500 inline-flex"
                  >
                    {tool}
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mt-auto"
              >
                <Button>View Project</Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
