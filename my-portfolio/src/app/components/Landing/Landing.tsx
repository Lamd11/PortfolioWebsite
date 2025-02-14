"use client";
import { motion } from "framer-motion";
import RotatingSkills from "./RotatingSkills";
import Navbar from "./Navbar";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Landing = () => {
    return (
        <section className="flex h-screen w-full items-center justify-center text-White">
            <Navbar />
            <div className="flex h-full w-full flex-row">
                <div className="flex w-1/2">
                    <div className="mx-auto my-auto flex flex-col justify-center">
                        <h3 className="text-3xl font-bold">Hi, </h3>
                        <h1 className="relative text-9xl font-bold">
                            I'm Daniel
                        </h1>
                        <div className="mt-8 flex flex-row items-center space-x-3 text-5xl font-semibold">
                            <h2 className="text-white">Proficient in </h2>
                            <RotatingSkills />
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<FontAwesomeIcon icon={faEnvelope} />} 
                            onClick={() => window.location.href = "mailto:Daniel.Lam3987@gmail.com"}
                            sx={{
                                marginTop: "2rem",
                                width: "15rem",
                                textTransform: "none", // Keeps the button text normal (not uppercase)
                                fontSize: "1rem", // Slightly larger font
                                padding: "0.75rem 1.5rem", // Add spacing for better appearance
                                backgroundColor: "#1976d2", // Custom primary blue color
                                "&:hover": {
                                    backgroundColor: "#1565c0", // Slightly darker on hover
                                },
                            }}
                        >
                            Get in Touch
                        </Button>
                    </div>
                </div>
                <div className="flex w-1/2 items-center">
                    {/* 
                    
                    <img
                        src="/daniel.jpg"
                        alt="Daniel"
                        className="my-auto max-w-full sm:w-4/5 md:w-3/4 lg:w-2/3"
                    />
                    */}


                </div>

            </div>
        </section>
    );
};

export default Landing;
