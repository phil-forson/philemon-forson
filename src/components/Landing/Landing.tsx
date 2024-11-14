import React from "react";
import { BiCross } from "react-icons/bi";

const Landing = () => {
  return (
    <section className="w-full h-[80vh] md:h-screen md:px-36 px-4 md:py-16 relative">
      <div className="md:relative h-full md:h-auto ">
        <div className="crosshair relative hidden md:block"></div>
        <div className="md:border border-[hsla(var(--ds-gray-200-value),1)] h-full md:h-[30rem] md:w-[calc(100vw-21rem)] md:absolute md:top-[10px] md:left-[10px] md:px-28 flex flex-col justify-center md:gap-7 gap-4 items-center ">
          <h1 className="md:text-4xl text-2xl font-semibold">
            Hi, I'm Philemon Forson — Software Developer & Data Engineer
          </h1>
          <p className="text-[hsl(var(--muted-foreground))] ">
            {" "}
            I specialize in building scalable applications and data-driven
            solutions, with expertise in developing dynamic web applications,
            integrating machine learning models, and creating impactful data
            visualizations. My experience spans full-stack development, data
            analysis, and engineering, all aimed at driving efficiency and
            enhancing user experience.
          </p>
        </div>
        <div className="crosshair absolute top-[30rem] left-[calc(100vw-21rem)] hidden md:block"></div>
      </div>

      {/* <p>Philemon Forson</p> */}
      {/* <BiCross /> */}
    </section>
  );
};

export default Landing;
