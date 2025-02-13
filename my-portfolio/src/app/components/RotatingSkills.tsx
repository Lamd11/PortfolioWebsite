import { motion } from "framer-motion";

const skills = [
    { text: "React", color: "text-blue-500" },
    { text: "TypeScript", color: "text-cyan-500" },
    { text: "C", color: "text-red-500" },
];

const RotatingSkills = () => {
    return (
        <div className="relative h-[3rem] overflow-hidden md:h-[8rem]">
            <motion.div
                className="absolute w-full"
                initial={{ y: "100%" }}
                animate={{ y: ["100%", "0%", "0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.15, 0.85, 1],
                    duration: 3,
                    ease: [0.43, 0.13, 0.23, 0.96],
                }}
            >
                {skills.map((skill, index) => (
                    <div key={index} className={`h-full flex items-center justify-center ${skill.color}`}>
                        <h1 className="text-5xl font-extrabold md:text-9xl">
                            {skill.text}
                        </h1>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default RotatingSkills;
