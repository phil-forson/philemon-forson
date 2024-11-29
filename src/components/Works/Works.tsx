import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import JobCard from "./JobCard";
import DomainCard from "./DomainCard";
import Line from "../../../public/Line";
// import ProfessionalExperience from "./ProfessionalExperience";

const Works = () => {
  return (
    <div className="h-auto md:px-36 md:py-16 w-full px-4">
      <h1 className="md:text-4xl text-2xl font-semibold text-center flex items-center gap-2 justify-center">
        Professional Experience <AiOutlineProject size={24} />
      </h1>

<div className="flex flex-col px-64 py-10">
  <div className="flex flex-start">

  <DomainCard />
  </div>
  <div className="w-full flex justify-center pb-3 rotate-180">

  <Line />
  </div>
  <div className="flex self-end">

  <DomainCard />
  </div>

</div>
      {/* <div className="card">
              <h1>Animate Borders</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                ad exercitationem voluptatem ullam et, natus impedit quae veniam
                optio a doloremque officiis beatae, itaque nesciunt nostrum
                quasi molestiae laudantium dolor asperiores soluta sint sed
                ratione cupiditate. Laudantium earum reiciendis enim.
              </p>
            </div> */}
      {/* <ProfessionalExperience /> */}
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
