import React, { lazy } from "react";
import image from "/public/image.png";
const Button = lazy(() => import("../../component/UI/Button"));

const About = () => {
  return (
    <section className="h-auto py-10 md:py-20  lg:py-10 flex flex-col items-center justify-center ">
      <h1 className="col-span-2 text-2xl md:text-3xl font-bold lg:py-5 text-center text-slate-700">
        {" "}
        Real Estate-focused Digital Mastery
      </h1>
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 p-4 md:p-6 items-center">
        <figure className=" flex justify-center">
          <img
            src={image}
            alt="image"
            loading="lazy"
            className="border-2 rounded-2xl border-slate-500"
          />
        </figure>
        <figure className="flex flex-col gap-2 md:gap-4 px-2">
          <h1 className=" text-xl md:text-3xl font-bold py-2 overflow-hidden text-pretty">
            Unlock the potential of Digital Real <br /> Estate Excellence
          </h1>
          <p className=" text-sm md:text-xl text-balance text-slate-700  ">
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </p>
          <Button />
        </figure>
      </article>
    </section>
  );
};

export default About;
