"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const skills = [
  { name: "Web Development", color: "text-blue-400" },
  { name: "UI/UX Design", color: "text-teal-400" },
  { name: "Full-Stack", color: "text-amber-600" },
  { name: "Cloud Computing", color: "text-green-500" },
  { name: "SEO", color: "text-yellow-500" },
  { name: "API Development", color: "text-red-600" },
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
    <div className="relative flex w-full items-center justify-center overflow-hidden md:h-[3.8rem]">
      <AnimatePresence mode="wait">
        <motion.div
          key={skills[index].name}
          initial={{ y: "100%" }}
          animate={{ y: "0%"}}
          exit={{ y: "-120%"}}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`md:left-0 md:absolute text-4xl lg:text-5xl whitespace-nowrap ${skills[index].color}`}
        >
          {skills[index].name}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingSkills;
