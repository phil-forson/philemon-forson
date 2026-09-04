"use client";
import React from "react";
import DomainCard from "./DomainCard";
import Line from "../../../public/Line";
import { professionalExperience } from "@/data/experience";

const experienceConversations = professionalExperience.map((job, index) => ({
  id: index + 1,
  company: job.company,
  chat: [
    {
      type: "right" as const,
      text: `When did you work at ${job.company}?`,
    },
    {
      type: "left" as const,
      text: `I was there from ${job.dates}.`,
    },
    {
      type: "right" as const,
      text: "What role did you take up there?",
    },
    {
      type: "left" as const,
      text: `I was a ${job.title}.`,
    },
    {
      type: "right" as const,
      text: "What was your key contribution there?",
    },
    {
      type: "left" as const,
      text: job.highlights[0],
    },
  ],
}));

const Works = () => {
  return (
    <div className="h-auto md:px-36 md:py-16 w-full px-4">
      <h1 className="md:text-4xl text-2xl font-semibold text-center flex items-center gap-2 justify-center">
        Professional Experience
      </h1>

      <div className=" flex-col space-y-8 md:space-y-0 px-4 md:px-64 py-10 flex">
        {experienceConversations.map((exp, index) => (
          <React.Fragment key={exp.id}>
            <div
              className={`flex ${
                index % 2 === 0 ? " md:self-start" : "md:self-end"
              }`}
            >
              <div className="transform hover:scale-105 transition-transform duration-300">
                <DomainCard company={exp.company} chat={exp.chat} />
              </div>
            </div>

            {index < experienceConversations.length - 1 && (
              <div
                className={`w-full hidden md:flex justify-center pb-3  ${
                  index % 2 === 0 ? "-rotate-180" : "  -scale-x-100 rotate-180"
                } `}
              >
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
