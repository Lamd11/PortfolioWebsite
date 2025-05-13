import { motion } from "framer-motion";
import {
  TbCircleLetterCFilled,
} from "react-icons/tb";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaPhp,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

import type { IconType } from "react-icons";

type Tech = {
  name: string;
  icon: IconType;
  color: string;
};

const techStack: Tech[] = [
  { name: "ReactJS", icon: FaReact, color: "text-blue-400" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "NextJS", icon: SiNextdotjs, color: "text-gray-900" },
  { name: "NodeJS", icon: FaNodeJs, color: "text-green-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },
  { name: "Java", icon: FaJava, color: "text-red-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "C", icon: TbCircleLetterCFilled, color: "text-blue-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-700" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
  { name: "Linux", icon: FaLinux, color: "text-yellow-500" },
  { name: "HTML", icon: FaHtml5, color: "text-orange-600" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
];



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function TechStackRow() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap justify-center gap-6 p-4"
    >
      {techStack.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className={`flex flex-col items-center transition-transform duration-75 ${tech.color} `}
          >
            <div className="text-7xl">
              <Icon />
            </div>
            <span className="mt-1 text-lg text-gray-600 dark:text-gray-300">{tech.name}</span>
          </motion.div>
        );
      })}

    </motion.div>
  );
}
