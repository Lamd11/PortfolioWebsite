"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const skills = [
  { name: "React", color: "text-blue-500" },
  { name: "TypeScript", color: "text-indigo-500" },
  { name: "C", color: "text-red-500" },
];

const RotatingSkills = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000); // Timer to change text

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
