export interface Projects {
  name: string;
  description: string;
  image: string;
  url: string;
  tools: string[];
}

export const projects: Projects[] = [
  {
    name: "Event Tabulating System",
    description:
      "SWU-ETS is a capstone project designed to assist event organizers and judges in efficiently managing and streamlining the process of events, such as pageants and contests. The system allows admins and organizers to effortlessly create and delete events, providing a user-friendly interface for event management.",
    image: "/images/swuets.png",
    url: "https://github.com/jmarie21/SWU-ETS",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },

  {
    name: "Personal Portfolio",
    description:
      "SWU-ETS is a capstone project designed to assist event organizers and judges in efficiently managing and streamlining the process of events, such as pageants and contests. The system allows admins and organizers to effortlessly create and delete events, providing a user-friendly interface for event management.",
    image: "/images/swuets.png",
    url: "https://github.com/jmarie21/SWU-ETS",
    tools: ["NextJs", "Typescript", "ShadcnUI"],
  },
];
