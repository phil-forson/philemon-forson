import React from "react";
import { BiCross } from "react-icons/bi";
import Button from "../Button/Button";
import { MdOutlineTouchApp } from "react-icons/md";

const Landing = () => {
  return (
    <section className="w-full h-auto lg:px-36 px-4 py-8 lg:py-16 relative">
      <div className="lg:relative h-full lg:h-auto ">
        {/* <div className="lg:border border-[hsla(var(--ds-gray-200-value),1)] h-full lg:h-[30rem] lg:w-[calc(100vw-21rem)] lg:absolute lg:top-[10px] lg:left-[10px] lg:px-28 flex flex-col justify-center lg:gap-7 gap-4 "> */}
        <div className="grid grid-background grid-cols-[var(--grid-cols-value)] grid-rows-[var(--grid-rows-value)] border border-[var(--ds-gray-200-value)]">
          <div className="crosshair relative  col-start-1 row-start-1 mt-[-10px] ml-[-10px]"></div>
          <div className=" col-start-2 col-end-[var(--grid-cols-num)] row-start-2 row-end-[var(--grid-rows-num)] border border-[var(--ds-gray-200-value)] !bg-[rgba(var(--color-background))] p-10 flex w-full flex-col justify-center">
            <h1 className="lg:text-4xl text-2xl font-semibold">
              {/* //  col-start-2 col-end-6 row-start-2" */}
              Hi, I'm Philemon Forson — Software Developer & Data Engineer
            </h1>
            <p className="text-[(var(--muted-foreground)]  ">
              {/* <p className="text-[(var(--muted-foreground)] "> */}I
              specialize in building scalable applications and data-driven
              solutions, with expertise in developing dynamic web applications,
              integrating machine learning models, and creating impactful data
              visualizations. My experience spans full-stack development, data
              analysis, and engineering, all aimed at driving efficiency and
              enhancing user experience.
            </p>
            <div className="mt-2 w-56">
              {/* <div> */}
              <Button
                text="Get in touch"
                variant="primary"
                icon={
                  <MdOutlineTouchApp color="rgb(var(--color-foreground))" />
                }
                customlink="mailto:forsonphilemon1@gmail.com"
              />
            </div>
           
          </div>
          <div
            className="crosshair relative row-start-[var(--grid-rows-num)] self-end justify-self-end mr-[-10px] mb-[-10px] "
            style={{
              gridColumnStart: `calc(var(--grid-cols-num))`,
            }}
          ></div>
        </div>
      </div>

      {/* <p>Philemon Forson</p> */}
      {/* <BiCross /> */}
    </section>
  );
};

export default Landing;
