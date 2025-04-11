import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./home/Home"));
const About = lazy(() => import("./about/About"));
const Service = lazy(() => import("./service/Service"));
const Quality = lazy(() => import("./quality/Quality"));

import Loader from '/public/loading.gif'

const OsumareLandingPage = () => {
  return (
    <div className="mx-auto 2xl:container">
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            <img src={Loader} alt="" />
          </div>
        }
      >
        <Home />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-screen bg-gray-100 animate-pulse rounded-lg my-4" />
        }
      >
        <About />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-screen bg-gray-100 animate-pulse rounded-lg my-4" />
        }
      >
        <Service />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-screen bg-gray-100 animate-pulse rounded-lg my-4" />
        }
      >
        <Quality />
      </Suspense>
    </div>
  );
};

export default OsumareLandingPage;
