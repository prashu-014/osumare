import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Service from "./service/Service";

const OsumareLandingPage = () => {
  return (
    <div className="mx-auto 2xl:container">
      <Home />
      <About />
      <Service />
    </div>
  );
};

export default OsumareLandingPage;
