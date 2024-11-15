import React from "react";
import { BiCross } from "react-icons/bi";
import Button from "../Button/Button";
import { MdOutlineTouchApp } from "react-icons/md";

const Landing = () => {
  return (
    <section className="w-full h-[80vh] lg:px-36 px-4 lg:py-16 relative">
      
      <div className="lg:relative h-full lg:h-auto ">
        <div className="crosshair relative hidden lg:block"></div>
        <div className="lg:border border-[hsla(var(--ds-gray-200-value),1)] h-full lg:h-[30rem] lg:w-[calc(100vw-21rem)] lg:absolute lg:top-[10px] lg:left-[10px] lg:px-28 flex flex-col justify-center lg:gap-7 gap-4 ">
          <h1 className="lg:text-4xl text-2xl font-semibold">
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
          <div className="w-36">
            <Button
              text="Get in touch"
              variant="primary"
              icon={<MdOutlineTouchApp color="rgb(var(--color-foreground))" />}
              customlink="mailto:forsonphilemon1@gmail.com"
            />
          </div>
        </div>
        <div className="crosshair absolute top-[30rem] left-[calc(100vw-21rem)] hidden lg:block"></div>
      </div>

      {/* <p>Philemon Forson</p> */}
      {/* <BiCross /> */}
    </section>
  );
};

export default Landing;
