import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const anchors = ['landing', 'projects', 'contact']

const Navbar = () => {

    const [activeSection, setActiveSection] = useState("landing");

    const handleScrollToSection = (anchorID: string) => {
        document.getElementById(anchorID)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "landing";

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
        return () => window.removeEventListener("scroll", handleScroll)

    }, []);

    return (
        <nav className="h-22 fixed top-0 z-50 mx-auto mt-2 flex w-[90%] w-full flex-col">
            <div className="mx-auto flex w-full flex-wrap items-center justify-between p-4">
                <h1 className="relative text-3xl font-bold">
                    <span className="relative inline-block">
                        {/* Colored Projection */}
                        <span className="absolute bottom-[10px] right-[10px] z-0 text-Blue">D</span>
                        {/* Main Letter */}
                        <span className="relative z-10 text-Pink">D</span>
                    </span>
                    aniel
                </h1>
                {/* Navigation with Bubble Effect */}
                <div className="relative flex space-x-6 rounded-full bg-gray-800 p-2">
                    {anchors.map((anchor, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer p-2 text-lg font-medium text-white"
                            onClick={() => handleScrollToSection(anchor)}
                        >
                            {/* Background Bubble (Moves with Active Section) */}
                            {activeSection === anchor && (
                                <motion.div
                                    layoutId="activeBubble"
                                    className="absolute inset-0 z-0 rounded-full bg-gray-500"
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                />
                            )}

                            {/* Anchor Text */}
                            <span className="relative z-10">{anchor.charAt(0).toUpperCase() + anchor.slice(1)}</span>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-8">
                    {[
                        {
                            name: 'Github',
                            icon: faGithub,
                            url: 'https://www.linkedin.com/in/daniel-lam3987/',
                            hoverColor: 'hover:text-Blue',
                        },
                        {
                            name: 'LinkedIn',
                            icon: faLinkedin,
                            url: 'https://ca.linkedin.com/in/tessa-smith-4206a8230',
                            hoverColor: 'hover:text-blue-500',
                        },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-lg ${social.hoverColor}`}
                        >
                            <FontAwesomeIcon icon={social.icon} className="text-4xl" />
                        </a>
                    ))}
                </div>
            </div>

        </nav>
    );
};

export default Navbar