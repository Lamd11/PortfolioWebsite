"use client";

interface WorkExperience {
  title: string;
  duration: string;
  organization: string;
  location: string;
  responsibilities: string[];
}

const workExperiences: WorkExperience[] = [
  {
    title: "Software Engineer Intern",
    duration: "July 2025 – Present",
    organization: "Incubella",
    location: "Montreal, QC",
    responsibilities: [
      "Building a FastAPI microservice to fetch, filter, and process tweets from X API and Apify for sentiment analysis, removing noise and boosting model accuracy over 100+ tweets",
      "Engineering Grok AI sentiment workflows with 10+ prompt-engineered patterns, delivering positive/negative polarity scores, narrative summaries, and contextual analysis",
      "Converted and designed 15+ Figma screens to Next.js pages using reusable React Components, reducing redundant code by 30% and improving UI consistency"
    ],
  },
  {
    title: "Web Developer",
    duration: "December 2024 – February 2025",
    organization: "University Student Council Presidential Campaign",
    location: "London, ON",
    responsibilities: [
      "Drove 100% of the technical strategy and execution, leading the design and implementation of the campaign’s official platform website using React and TypeScript.",
      "Worked in an Agile environment, collaborating with a management team of 3 within a 20+ member campaign team, attending weekly meetings to ensure the website’s design aligns with the campaign’s branding and expectations.",
      "Engineered responsive animations using Framer Motion, achieving loading times under 2 seconds per animation frame without compromising the performance quality of the existing website architecture.",
      "Optimized the website for SEO, receiving internet traffic of 100+ page views and improving visibility during the campaign period.",
    ],
  },
  {
    title: "Freelance Web Developer",
    duration: "March 2025 – April 2025",
    organization: "Dancing DJ Andre",
    location: "Ottawa, ON (Remote)",
    responsibilities: [
      "Designed and developed a promotional website to showcase DJ branding and event services, improving online presence and customer engagement.",
      "Integrated a Google Reviews API widget to display real-time client testimonials and enhance credibility.",
      "Implemented SEO best practices to improve the site’s search engine ranking and local visibility in the Ottawa area.",
    ],
  }

];

const Work = () => {
  return (
    <div className="w-full px-6 py-8 md:px-12">
      {workExperiences.map((job, index) => (
        <div key={index} className="mb-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">
              {job.title}
              <span className="font-normal text-gray-400"> | {job.duration}</span>
            </h3>
            <p className="italic text-white">
              {job.organization} – {job.location}
            </p>
            <ul className="ml-5 mt-2 list-disc space-y-2 text-white">
              {job.responsibilities.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
