import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import JobCard from "../JobCard";
import ProfessionalExperience from "../ProfessionalExperience";

const Works = () => {
  return (
    <div className="h-auto md:px-36 md:py-16 w-full">
      <h1 className="md:text-4xl text-2xl font-semibold text-center flex items-center gap-2 justify-center">
        Professional Experience <AiOutlineProject size={24} />
      </h1>
      <ProfessionalExperience />
      {/* <div className="mt-4 flex flex-col gap-5">
        <div className="relative">
          <JobCard
            title="Software Developer"
            company="Mesh Labs"
            date="Nov 2023 - Current"
            src="./mesh.svg"
            roles={[
              "Created dynamic dashboards and visualizations to facilitate real-time monitoring of business metrics and performance",
              "Developed and maintained RESTful APIs to support the company's web applications",
            ]}
          />
        </div>
        <div className="relative">
          <JobCard
            title="Data Analyst/ Fronted Web Engineer (Intern)"
            company="Grundfos Pumps Ghana Limited"
            date="Aug 2022 - Apr 2023   "
            src="./mesh.svg"
            roles={[
              "Leveraged data analysis to drive business improvements and enhance operational efficiency",
              "Developed a ticketing and event booking system.",
            ]}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Works;
