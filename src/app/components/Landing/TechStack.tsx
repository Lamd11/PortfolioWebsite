"use client";
import { motion } from "framer-motion";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { FaReact, FaNodeJs, FaPython, FaJava,} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript } from "react-icons/si";

const techStack = [
  { name: "ReactJS", icon: <FaReact />, color: "text-blue-400" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "NextJS", icon: <SiNextdotjs />, color: "text-gray-900" },
  { name: "NodeJS", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
  { name: "Java", icon: <FaJava />, color: "text-red-600" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "C", icon: <TbCircleLetterCFilled />, color: "text-blue-500" },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-14 p-8">
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="sm:h-26 sm:w-26 flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-lg transition duration-300 hover:bg-white/90 md:h-28 md:w-28 lg:h-40 lg:w-40"
        >
          <div
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl ${tech.color} neon-glow`}
          >
            {tech.icon}
          </div>
          <p className="mt-2 text-base font-semibold text-black md:text-lg">{tech.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
