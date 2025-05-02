"use client";

const Work = () => {
  return (
    <div className="w-full px-6 py-8 md:px-12">
      <div className="mb-8">
        <h2 className="mb-4 text-3xl font-bold text-white">Experience</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">
            Web Developer
            <span className="font-normal text-gray-400"> | December 2024 – February 2025</span>
          </h3>
          <p className="italic text-white">
            University Student Council Presidential Campaign – London, ON
          </p>
          <ul className="ml-5 mt-2 list-disc space-y-2 text-white">
            <li>
              Drove 100% of the technical strategy and execution, leading the design and implementation of the
              campaign’s official platform website using React and TypeScript.
            </li>
            <li>
              Worked in an Agile environment, collaborating with a management team of 3 within a 20+ member campaign
              team, attending weekly meetings to ensure the website’s design aligns with the campaign’s branding and
              expectations.
            </li>
            <li>
              Engineered responsive animations using Framer Motion, achieving loading times under 2 seconds per
              animation frame without compromising the performance quality of the existing website architecture.
            </li>
            <li>
              Optimized the website for SEO, receiving internet traffic of 100+ page views and improving visibility
              during the campaign period.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
