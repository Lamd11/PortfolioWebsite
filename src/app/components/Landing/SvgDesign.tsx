import { motion } from "framer-motion";

const SvgDesign = () => {
    return (
        <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
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
                {/* Glowing Outer Ring */}
                <motion.circle 
                    cx="250" cy="250" r="120" 
                    stroke="url(#neonGradient)" strokeWidth="6" 
                    fill="transparent"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    filter="url(#glow)"
                />

                {/* Pulsing Core */}
                <motion.circle 
                    cx="250" cy="250" r="50" 
                    fill="url(#neonGradient)"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    filter="url(#glow)"
                />

                {/* Moving Neon Lines */}
                <motion.line x1="100" y1="250" x2="400" y2="250" 
                    stroke="url(#neonGradient)" strokeWidth="3"
                    animate={{ x1: [100, 120, 100], x2: [400, 380, 400] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    filter="url(#glow)"
                />
                <motion.line x1="250" y1="100" x2="250" y2="400" 
                    stroke="url(#neonGradient)" strokeWidth="3"
                    animate={{ y1: [100, 120, 100], y2: [400, 380, 400] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    filter="url(#glow)"
                />
                
                {/* Neon Gradient */}
                <defs>
                    <linearGradient id="neonGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#00ffff" />
                        <stop offset="100%" stopColor="#ff00ff" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
            </motion.svg>
        </div>
    );
};

export default SvgDesign;