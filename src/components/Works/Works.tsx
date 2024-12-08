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
        text: "When did your journey with Foresight Consult begin?",
      },
      {
        type: "left",
        text: "I started working there in 2021.",
      },
      {
        type: "right",
        text: "What role did you take up there?",
      },
      {
        type: "left",
        text: "I was a Software Developer and Data Engineer Intern.",
      },
      {
        type: "right",
        text: "What was your key contribution there?",
      },
      {
        type: "left",
        text: "I contributed to building data pipelines and automating financial data analysis.",
      },
      {
        type: "right",
        text: "What’s something you learned or want to explore further?",
      },
      {
        type: "left",
        text: "I discovered my interest in scaling data systems and aim to deepen my knowledge of distributed databases.",
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
        text: "How long were you with Ghana Education Service?",
      },
      {
        type: "left",
        text: "I was there for the year 2022.",
      },
      {
        type: "right",
        text: "What was your primary focus there?",
      },
      {
        type: "left",
        text: "My focus was on analyzing and processing educational data sets to improve decision-making.",
      },
      {
        type: "right",
        text: "What’s an area you want to grow in?",
      },
      {
        type: "left",
        text: "I want to explore more advanced automation pipelines to streamline data collection processes further.",
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
        text: "Can you tell me about your time at Grundfos Pumps Ghana Limited?",
      },
      {
        type: "left",
        text: "I worked there from August 2022 to April 2023.",
      },
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
        text: "What new skills did you gain or want to develop?",
      },
      {
        type: "left",
        text: "I gained a solid understanding of operational analytics and aim to advance my skills in predictive analytics.",
      },
    ],
  },
  {
    id: 4,
    company: "Logiciel Ghana Limited",
    role: "Frontend Developer",
    year: "2023",
    chat: [
      {
        type: "right",
        text: "Are you currently working at Logiciel Ghana Limited? When did you start?",
      },
      {
        type: "left",
        text: "Yes, I started there in November 2023 and am currently employed.",
      },
      {
        type: "right",
        text: "What role are you currently handling?",
      },
      {
        type: "left",
        text: "I’m a Frontend Developer, creating engaging and responsive user interfaces.",
      },
      {
        type: "right",
        text: "What projects have you worked on so far?",
      },
      {
        type: "left",
        text: "I’ve built and optimized user-friendly web applications, collaborating closely with backend teams for seamless integration.",
      },
      {
        type: "right",
        text: "What’s something you’re aiming to achieve in your role?",
      },
      {
        type: "left",
        text: "I aim to master modern frontend frameworks like React and enhance my knowledge of accessibility standards to build more inclusive designs.",
      },
    ],
  },
];


const Works = () => {
  return (
    <div className="h-auto md:px-36 md:py-16 w-full px-4">
      <h1 className="md:text-4xl text-2xl font-semibold text-center flex items-center gap-2 justify-center">
        Professional Experience
      </h1>

      <div className="flex flex-col space-y-8 md:space-y-0 px-4 md:px-64 py-10">
        {experiences.map((exp, index) => (
          <React.Fragment key={exp.id}>
            {/* DomainCard */}
            <div className={`flex ${index % 2 === 0 ? " md:self-start" : "md:self-end"}`}>
              <DomainCard company={exp.company} chat={exp.chat} />
            </div>

            {/* Line */}
            {index < experiences.length - 1 && (
              <div className={`w-full hidden md:flex justify-center pb-3  ${index % 2 === 0 ? "-rotate-180" : "  -scale-x-100 rotate-180"} `}>
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
