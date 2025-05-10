import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@mui/material";

const anchors = ["home", "experience", "about", "projects", "contact"];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const socials = [
        {
            name: "Github",
            icon: faGithub,
            url: "https://github.com/your-profile",
            hoverColor: "hover:text-blue-400",
        },
        {
            name: "LinkedIn",
            icon: faLinkedin,
            url: "https://www.linkedin.com/in/daniel-lam3987/",
            hoverColor: "hover:text-blue-500",
        },
    ]

    const handleScrollToSection = (anchorID: string) => {
        const section = document.getElementById(anchorID);
        const yOffset = -80; // Adjust based on your navbar height
        if (section) {
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "home";

            anchors.forEach((anchor) => {
                const section = document.getElementById(anchor);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = anchor;
                    }
                }
            });
            setActiveSection(currentSection);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle body overflow when menu is open. Cool trick to stop user scrolling
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        // Cleaner. Garunteee user can keep scrolling when they close the menu
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 z-50 w-full bg-black/50 shadow-lg backdrop-blur-md">
            <div className="flex w-full items-center justify-between p-4 md:mx-auto md:w-[90%]">
                {/* Logo */}
                <h1 className="z-50 text-3xl font-bold text-white">
                    <span className="relative inline-block">
                        <span className="absolute bottom-[3px] right-[3px] text-blue-500 blur-sm">
                            D
                        </span>
                        <span className="relative text-blue-500">D</span>
                    </span>
                    aniel
                </h1>

                {/* Desktop. Navigation with Bubble Effect */}
                <div className="relative hidden space-x-6 rounded-full bg-gray-900/80 p-2 shadow-lg md:flex">
                    {anchors.map((anchor, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer p-2 text-lg font-medium text-white transition duration-300 hover:text-blue-400"
                            onClick={() => handleScrollToSection(anchor)}
                        >
                            {activeSection === anchor && (
                                <motion.div
                                    layoutId="activeBubble"
                                    className="absolute inset-0 z-0 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                />
                            )}
                            <span className="relative z-10">
                                {anchor.charAt(0).toUpperCase() + anchor.slice(1)}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Desktop. Social Links */}
                <div className="hidden items-center space-x-6 md:flex">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-white transition duration-300 ${social.hoverColor}`}
                        >
                            <FontAwesomeIcon
                                icon={social.icon}
                                className="text-3xl hover:scale-110"
                            />
                        </a>
                    ))}
                    <Button
                        variant="contained"
                        href="https://github.com/Lamd11/portfolio"
                        target="_blank"

                        sx={{
                            backgroundColor: "#FFFFFF", // White background
                            color: "#3b82f6", // Blue text
                            fontWeight: "bold",
                            textTransform: "none",
                            border: "none",
                            marginRight: "1.5rem", // Adds space to the right
                            padding: "8px 16px", // Proper padding for a balanced look
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                backgroundColor: "#60a5fa",
                                color: "#fff",
                            },
                        }}
                    >
                        Source Code
                    </Button>
                </div>
                <button
                    className="z-50 text-3xl text-White md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <motion.div
                        animate={{ rotate: menuOpen ? 180 : 0 }} // Rotates 180° when opened
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </motion.div>

                </button>
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "easeinout", stiffness: 300, damping: 20 }}
                        className="fixed left-0 top-0 z-40 flex h-screen w-full flex-col">
                        <div className="flex h-2/5 flex-col bg-gray-950">
                            <div className="mt-20 flex flex-col space-y-2 p-2 shadow-lg">
                                {anchors.map((anchor, index) => (
                                    <div
                                        key={index}
                                        className="relative cursor-pointer p-2 text-2xl font-semibold text-white transition duration-300"
                                        onClick={() => handleScrollToSection(anchor)}
                                    >
                                        {activeSection === anchor && (
                                            <motion.div
                                                layoutId="activeBubble"
                                                className="absolute inset-0 z-0 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            />
                                        )}
                                        <span className="relative z-10">
                                            {anchor.charAt(0).toUpperCase() + anchor.slice(1)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex h-full flex-col bg-blue-500">
                            <div className="absolute bottom-4 mx-3 flex w-full flex-col justify-center space-y-2">
                                <h3 className="text-md font-medium">Socials:</h3>
                                <div className="flex w-full justify-between">
                                    <div className="flex space-x-6">
                                        {socials.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`text-white transition duration-300 ${social.hoverColor}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={social.icon}
                                                    className="text-3xl"
                                                />
                                            </a>
                                        ))}
                                    </div>
                                    <Button
                                        variant="contained"
                                        href="https://github.com/Lamd11/portfolio"
                                        target="_blank"
                                        sx={{
                                            backgroundColor: "#FFFFFF", // White background
                                            color: "#3b82f6", // Blue text
                                            fontWeight: "bold",
                                            textTransform: "none",
                                            border: "none",
                                            marginRight: "1.5rem", // Adds space to the right
                                            padding: "8px 16px", // Proper padding for a balanced look
                                        }}
                                    >
                                        Source Code
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
