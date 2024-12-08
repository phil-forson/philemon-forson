import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import DomainCard from "./DomainCard";
import Line from "../../../public/Line";

const experiences = [
  {
    id: 1,
    company: "Foresight Consult",
    role: "Software Developer And Data Engineer Intern",
    year: "2021",
    chat: [
      {
        type: "right",
        text: "What role did you take up there?",
      },
      {
        type: "left",
        text: "Software Developer And Data Engineer Intern",
      },
      {
        type: "right",
        text: "What tools or technologies did you use?",
      },
      {
        type: "left",
        text: "I worked with Python, SQL, and Excel for data analysis, along with basic web development tools like HTML and JavaScript.",
      },
      {
        type: "right",
        text: "What challenges did you face as an intern?",
      },
      {
        type: "left",
        text: "Learning advanced data engineering concepts and integrating tools efficiently within tight deadlines was challenging.",
      },
    ],
  },
  {
    id: 2,
    company: "Ghana Education Service",
    role: "Data Engineer",
    year: "2022",
    chat: [
      {
        type: "right",
        text: "What was your primary focus there?",
      },
      {
        type: "left",
        text: "I focused on analyzing and processing educational data sets to improve decision-making.",
      },
      {
        type: "right",
        text: "What was a major project you led?",
      },
      {
        type: "left",
        text: "I led a teacher data collection project, where I created and implemented a database for enhanced data accessibility.",
      },
      {
        type: "right",
        text: "What skills did you improve on?",
      },
      {
        type: "left",
        text: "I improved my database management skills, learned how to clean and process large datasets, and gained exposure to cloud storage solutions.",
      },
      {
        type: "right",
        text: "What do you think could have gone better?",
      },
      {
        type: "left",
        text: "I could have worked on more advanced automation pipelines to streamline the data collection process.",
      },
    ],
  },
  {
    id: 3,
    company: "Grundfos Pumps Limited",
    role: "Data Analyst",
    year: "2023",
    chat: [
      {
        type: "right",
        text: "What projects did you work on?",
      },
      {
        type: "left",
        text: "I developed a ticketing and event booking system to enhance operational efficiency.",
      },
      {
        type: "right",
        text: "What were your main responsibilities?",
      },
      {
        type: "left",
        text: "I analyzed operational data to identify bottlenecks and created actionable dashboards for management.",
      },
      {
        type: "right",
        text: "Which tools or frameworks did you use for data analysis?",
      },
      {
        type: "left",
        text: "I primarily used Python for data manipulation, Tableau for visualization, and Excel for reporting.",
      },
      {
        type: "right",
        text: "Where do you feel you needed to improve?",
      },
      {
        type: "left",
        text: "I wanted to get more hands-on experience with machine learning to provide predictive analytics for better decision-making.",
      },
    ],
  },
];


const Works = () => {
  return (
    <div className="h-auto md:px-36 md:py-16 w-full px-4">
      <h1 className="md:text-4xl text-2xl font-semibold text-center flex items-center gap-2 justify-center">
        Professional Experience <AiOutlineProject size={24} />
      </h1>

      <div className="flex flex-col px-64 py-10">
        {experiences.map((exp, index) => (
          <React.Fragment key={exp.id}>
            {/* DomainCard */}
            <div className={`flex ${index % 2 === 0 ? "self-start" : "self-end"}`}>
              <DomainCard company={exp.company} chat={exp.chat} />
            </div>

            {/* Line */}
            {index < experiences.length - 1 && (
              <div className={`w-full flex justify-center pb-3  ${index % 2 === 0 ? "-rotate-180" : "  -scale-x-100 rotate-180"} `}>
                <Line />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Works;
