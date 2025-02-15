import { motion } from "framer-motion";

const SvgDesign = () => {
    return (
        <div className="absolute right-0 top-0 flex h-full w-1/2 items-center justify-center">
            <motion.svg
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                width="500"
                height="500"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle 
                    cx="250" cy="250" r="100" 
                    stroke="url(#gradient)" strokeWidth="4" 
                    fill="transparent"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                />
                <motion.rect 
                    x="150" y="150" width="200" height="200" 
                    stroke="white" strokeWidth="2" 
                    fill="transparent"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                />
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="100%" stopColor="#FF4500" />
                    </linearGradient>
                </defs>
            </motion.svg>
        </div>
    );
};

export default SvgDesign;
