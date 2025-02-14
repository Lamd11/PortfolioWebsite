"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const skills = [
  { name: "ReactJS", color: "text-blue-400" },
  { name: "TailwindCSS", color: "text-teal-400" },
  { name: "NextJS", color: "text-amber-600" },
  { name: "NodeJS", color: "text-green-500" },
  { name: "Python", color: "text-yellow-500" },
  { name: "Java", color: "text-red-600" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "TypeScript", color: "text-blue-600" },
  { name: "C", color: "text-orange-500" },
];

const RotatingSkills = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2500); // Timer to change text

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-[3.8rem] w-1/2 items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={skills[index].name}
          initial={{ y: "100%" }}
          animate={{ y: "0%"}}
          exit={{ y: "-120%"}}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`left-0 absolute text-5xl ${skills[index].color}`}
        >
          {skills[index].name}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingSkills;
