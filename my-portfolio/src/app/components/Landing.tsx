import { motion } from "framer-motion";
import RotatingSkills from "./RotatingSkills";

const Landing = () => {
    return (
        <section className="flex h-screen w-full items-center justify-center text-White">
            <div className="flex h-full w-full flex-row">
                <div className="flex w-1/2">
                    <div className="mx-auto my-auto flex flex-col justify-center">
                        <h3 className="text-3xl font-bold">Hi, </h3>
                        <h1 className="relative text-9xl font-bold">
                            I'm 
                            <span className="relative inline-block">
                                {/* Colored Projection */}
                                <span className="absolute bottom-[10px] right-[10px] z-0 text-Blue">D</span>
                                {/* Main Letter */}
                                <span className="relative z-10 text-Pink">D</span>
                            </span>
                            aniel
                        </h1>
                        <div className="flex flex-row space-x-2 text-5xl font-semibold">
                            <h2 className="text-white">Proficient in </h2>
                            <RotatingSkills /> {/* Use the new component here */}

                        </div>
                            
                    </div>
                </div>
                <div className="w-1/2">
                    <img
                        src="/daniel.jpg"
                        alt="Daniel"
                        className="max-w-full sm:w-4/5 md:w-3/4 lg:w-2/3"
                    />
                </div>

            </div>
        </section>
    );
};

export default Landing;
