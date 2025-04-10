import React from "react";
import Button from "./UI/Button";

const HeadingPage = () => {
  return (
    <div className="flex flex-col gap-5 text-center items-center md:p-8">
      <h1 className=" text-xl md:text-5xl md:overflow-hidden py-2">
        Elavate
        <span className="text-blue-500 font-bold"> Real Estate Success</span>{" "}
        with <br /> Osumare's Digital Expert
      </h1>
      <p className="text-xs md:text-sm">Tailored Solution for Thriving in the Digital Real Estate Landscape</p>
      <Button />
    </div>
  );
};

export default HeadingPage;
