import { skills } from "@/app/data/skills";

export default function Skills() {
  return (
    <section className="min-h-auto bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 lg:px-32">
        {/* Section Title */}
        <h2 className="text-4xl text-primary font-bold text-center">
          A collection of my skills
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
          These are the technologies I use to craft efficient software
          solutions.
        </p>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 transform hover:scale-110"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
