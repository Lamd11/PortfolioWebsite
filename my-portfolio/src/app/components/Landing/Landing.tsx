"use client";
import { motion } from "framer-motion";
import RotatingSkills from "./RotatingSkills";
import Navbar from "./Navbar";

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
