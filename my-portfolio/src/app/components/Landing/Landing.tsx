"use client";
import { motion } from "framer-motion";
import RotatingSkills from "./RotatingSkills";
import Navbar from "./Navbar";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SvgDesign from "./SvgDesign";
import TechStack from "./TechStack";

const Landing = () => {
    return (
        <section className="flex h-screen w-full flex-col items-center justify-center pt-44 text-white md:pt-0">
            <Navbar />
            <div className="flex h-full w-full flex-col items-center md:flex-row">
                {/* Left Side - Text Content */}
                <div className="flex w-full justify-center overflow-visible md:w-1/2">
                    <div className="mx-auto my-auto flex flex-col justify-center text-center md:text-left">
                        {/* "Hi," for Desktop Only */}
                        <h3 className="hidden text-2xl font-bold md:block md:text-4xl">Hi,</h3>

                        {/* Different heading for mobile & desktop */}
                        <h1 className="text-5xl font-bold md:hidden">Hi, I'm Daniel</h1>
                        <h1 className="hidden text-5xl font-bold sm:text-7xl md:block lg:text-8xl">
                            I'm Daniel
                        </h1>

                        <div className="mt-6 flex flex-col items-center space-y-3 sm:space-x-3 sm:space-y-0 md:flex-row">
                            <h2 className="text-3xl font-semibold md:text-4xl">I study </h2>
                            <div className="flex flex-grow overflow-visible">
                                <RotatingSkills />
                            </div>
                        </div>
                        <div className="mx-auto flex md:ml-0">
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<FontAwesomeIcon icon={faEnvelope} />}
                                onClick={() => window.location.href = "mailto:Daniel.Lam3987@gmail.com"}
                                sx={{
                                    marginTop: "2rem",
                                    width: "12rem",
                                    fontSize: "1rem",
                                    padding: "0.75rem 1.5rem",
                                    textTransform: "none",
                                    backgroundColor: "#1976d2",
                                    "&:hover": { backgroundColor: "#1565c0" },
                                    fontWeight: "bold"
                                }}
                            >
                                Get in Contact
                            </Button>
                        </div>

                    </div>
                </div>

                {/* Right Side - SVG Design */}
                <div className="relative flex w-full justify-center md:w-1/2">
                </div>
            </div>
            <TechStack/>
        </section>
    );
};

export default Landing;
