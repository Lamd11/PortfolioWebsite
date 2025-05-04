"use client";

import Skills from "./Skills";
import TechStack from "./TechStack";
import Work from "./Work";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const viewResume = "https://drive.google.com/file/d/14BC_Wp-M8knlKsd7ys0md9JkNQrycAGL/view?usp=sharing";

const Experience = () => {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center text-white md:flex-row">
      {/* Left Column - Experience */}
      <div className="flex h-full w-full flex-col items-center justify-center px-6 md:px-24">
        <div className="my-auto w-full mr-auto ">
          <h2 className="mb-6 text-5xl font-bold text-left">Experience</h2>
          <div className="flex flex-col justify-center md:justify-start max-w-xl mx-auto">
            <Work />
            <Button
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faUserCircle} />}
              onClick={() => window.open(viewResume, "_blank")}
              sx={{
                marginBottom: "2rem",
                width: "16rem",
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
    </section>
  );
};

export default Experience;
