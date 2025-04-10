import React from "react";
import Navbar from "../../component/Navbar";
import HeadingPage from "../../component/HeadingPage";
import LandingImage from "../../component/LandingImage";

const Home = () => {
  return (
    <div className="h-svh md:min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="main-section flex-1 justify-center items-center flex flex-col p-4 gap-8 ">
        <HeadingPage />
        <LandingImage />
      </main>
    </div>
  );
};

export default Home;
