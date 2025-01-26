import { StaticImageData } from "next/image";

export interface Skill {
  name: string;
  image: string;
}

export const skills: Skill[] = [
  {
    name: "HTML",
    image: "/icons/html.svg",
  },
  {
    name: "CSS",
    image: "/icons/css.svg",
  },
  {
    name: "JavaScript",
    image: "/icons/javascript.svg",
  },
  {
    name: "PHP",
    image: "/icons/php.svg",
  },
  {
    name: "Laravel",
    image: "/icons/laravel.svg",
  },
  {
    name: "ReactJs",
    image: "/icons/reactjs.svg",
  },
  {
    name: "NextJs",
    image: "/icons/nextjs.svg",
  },
  {
    name: "MySQL",
    image: "/icons/mysql.svg",
  },
  {
    name: "PostgreSQL",
    image: "/icons/postgresql.svg",
  },
  {
    name: "Git",
    image: "/icons/git.svg",
  },
];
