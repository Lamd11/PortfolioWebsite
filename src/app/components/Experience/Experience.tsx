"use client";

import Skills from "./Skills"
import Work from "./Work"
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {

    return (
        <section className="flex h-screen w-full flex-col items-center justify-center pt-44 text-white md:flex-row md:pt-0">
            <div className="flex h-full w-full flex-col items-center md:w-1/2 md:flex-row md:pl-12">
                {/* Left Side - Text Content */}
                <div className="flex w-full justify-center overflow-visible">
                    <div className="my-auto flex w-full flex-col justify-center text-center md:ml-[6%] md:text-left">
                        <div className="text-5xl font-bold">Experience</div>
                        <div className="mx-auto flex md:ml-0">
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<FontAwesomeIcon icon={faUserCircle} />}
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
                                View my Resume/CV
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right box/bottom. This is for skills*/}
            <div className="flex h-full w-full flex-col items-center justify-center md:w-1/2 md:flex-row">
                <Skills />
            </div>

        </section>
    );

};

export default Experience;