"use client";

import Work from "./Work";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const viewResume = "https://drive.google.com/file/d/14BC_Wp-M8knlKsd7ys0md9JkNQrycAGL/view?usp=sharing";

const Experience = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center text-white md:flex-row">
      {/* Left Column - Experience */}

      <div className="flex h-full w-full flex-col items-center justify-center px-6 md:px-24">
        <div className="relative my-auto mr-auto flex w-full flex-col">
          <h1 className="mx-auto mb-6 text-5xl font-bold">Experience</h1>

          <div className="hidden w-full justify-center md:flex md:w-8">
            <div className="absolute bottom-0 top-0 w-1 animate-pulse rounded-full bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500" />
          </div>

          <div className="mx-auto flex max-w-5xl flex-col justify-center md:justify-start">
            <Work />
            <Button
              className="ml-12"
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
                "&:hover": { backgroucndColor: "#1565c0" },
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
