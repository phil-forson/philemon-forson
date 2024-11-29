// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaLock } from "react-icons/fa";

// const experiences = [
//   {
//     id: 4,
//     company: "Foresight Consult",
//     role: "Software Developer",
//     date: "May 2021 - Feb 2022",
//     tasks: [
//       "Engaged in the analysis of complex financial data, supporting strategic planning and decision making processes",
//       "Contributed to the enhancement of the company's data processing system, integrating advanced analytical tools for operational efficiency",
//     ],
//   },
//   {
//     id: 3,
//     company: "Ghana Education Service",
//     role: "Data Engineer",
//     date: "Feb 2022 - Jul 2022",
//     tasks: [
//       "Analyzed and processed educational data sets, contributing to improved data-driven decision making within the department.",
//       "Led a project on teacher data collection, successfully creating and implementing a database to enhance data accessibility and reliability",
//     ],
//   },
//   {
//     id: 2,
//     company: "Grundfos Pumps Ghana Limited",
//     role: "Data Analyst",
//     date: "Aug 2022 - Apr 2023",
//     details: "Analyzed data to enhance performance metrics...",
//     tasks: [
//       "Leveraged data analysis to drive business improvements and enhance operational efficiency",
//       "Developed a ticketing and event booking system.",
//     ],
//   },
//   {
//     id: 1,
//     company: "Logiciel Ghana Limited",
//     role: "Backend Developer",
//     date: "Nov 2023 - Current",
//     details: "Built backend systems for various applications...",
//     tasks: [
//       "Created dynamic dashboards and visualizations to facilitate real-time monitoring of business metrics and performance",
//       "Developed and maintained RESTful APIs to support the company's web applications",
//     ],
//   },
// ];

// const ProfessionalExperience = () => {
//   const [activeTab, setActiveTab] = useState(null);

//   const handleTabClick = (id: any) => {
//     setActiveTab(id === activeTab ? null : id);
//   };

//   return (
//     <div className="relative mt-20 flex justify-center items-center flex-col">
//       {experiences.map((exp, index) => (
//         <motion.div
//           key={exp.id}
//           className={`window-card cursor-pointer `}
//           onClick={() => handleTabClick(exp.id)}
//           initial={{ y: index * -15 }}
//           animate={{
//             y: activeTab === exp.id ? -50 : index * -15,
//             // zIndex: activeTab === exp.id ? 10 : index,
//           }}
//           transition={{ type: "spring", stiffness: 200, damping: 20 }}
//           style={{
//             // marginTop: `${index * 10}px`,
//             opacity: activeTab === null || activeTab === exp.id ? 1 : 0.5,
//             width: `calc(100% - var(--window-card-diff)*${exp.id})`,
//           }}
//         >
//           <div className="flex justify-between items-center w-full">
//             <div className="flex items-center space-x-2">
//               <div className="flex space-x-1">
//                 <span className="w-3 h-3 rounded-full bg-red-500"></span>
//                 <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
//                 <span className="w-3 h-3 rounded-full bg-green-500"></span>
//               </div>
//             </div>
//             <div className="bg-[(var(--ds-gray-100-value)] w-52 md:w-72 py-2 rounded-lg flex items-center justify-center gap-2 text-[hsl(var(--muted-foreground))]">
//               <FaLock size={10} />

//               <h2 className="text-[10px] md:text-sm font-[family-name:var(--font-geist-mono)]">
//                 {exp.company}
//               </h2>
//             </div>
//             <div></div>
//           </div>
//           {/* <p className="mt-2 text-sm">{exp.role}</p> */}

//           {/* Reveal details if active */}
//           {activeTab === exp.id && (
//             <motion.div
//               className="mt-4 text-xs md:text-sm "
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <p className="font-semibold text-xs md:text-sm">
//                 {exp.role}
//                 {", "}
//                 <span className="text-[hsl(var(--muted-foreground))] text-xs md:text-sm mt-1">{`${exp.date}`}</span>
//               </p>

//               {exp.tasks?.map((task, index) => (
//                 <li className="flex gap-1 items-start" key={index}>
//                   {"- "}{task}
//                 </li>
//               ))}
//             </motion.div>
//           )}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default ProfessionalExperience;
