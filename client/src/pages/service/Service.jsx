import React, { lazy, Suspense } from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { FaMousePointer } from "react-icons/fa";
import { TiSocialFlickr } from "react-icons/ti";
import { BiBookBookmark } from "react-icons/bi";
import { MdOutlineWebAsset } from "react-icons/md";
import { MdDataThresholding } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { TfiVideoClapper } from "react-icons/tfi";

const Button = lazy(() => import("../../component/UI/Button"));
const ServiceCard = lazy(() => import("../../component/UI/ServiceCard"));

const Service = () => {
  const services = [
    {
      id: 1,
      name: "Automative SEO",
      paragraph:
        "Drive Your Success with Automative SEO: Ignite Online Visibility and Outrace the Competition.Accelerate Your Business Growth Today",
      icon: <MdOutlineBarChart className="text-2xl" />,
    },
    {
      id: 2,
      name: "PPC Precision",
      paragraph:
        "Drive Your Success with Automative SEO: Ignite Online Visibility and Outrace the Competition.Accelerate Your Business Growth Today",
      icon: <FaMousePointer className="text-2xl" />,
    },
    {
      id: 3,
      name: "Social Aceleration",
      paragraph:
        "Drive Your Success with Automative SEO: Ignite Online Visibility and Outrace the Competition.Accelerate Your Business Growth Today",
      icon: <TiSocialFlickr className="text-2xl" />,
    },
    {
      id: 4,
      name: "Content Excellence",
      paragraph:
        "Drive Your Success with Automative SEO: Ignite Online Visibility and Outrace the Competition.Accelerate Your Business Growth Today",
      icon: <BiBookBookmark className="text-2xl" />,
    },
    {
      id: 5,
      name: "Web Design",
      paragraph:
        "Drive Your Success with Automative SEO: Ignite Online Visibility and Outrace the Competition.Accelerate Your Business Growth Today",
      icon: <MdOutlineWebAsset className="text-2xl" />,
    },
    {
      id: 6,
      name: "Data-Driven Insights",
      paragraph:
        "Drive Your Success with Automative SEO: Ignite Online Visibility and Outrace the Competition.Accelerate Your Business Growth Today",
      icon: <MdDataThresholding className="text-2xl" />,
    },
    {
      id: 7,
      name: "End-to-End Solutions",
      paragraph:
        "Drive Your Success with Automative SEO: Ignite Online Visibility and Outrace the Competition.Accelerate Your Business Growth Today",
      icon: <SiMinds className="text-2xl" />,
    },
    {
      id: 8,
      name: "Video marketing",
      paragraph:
        "Drive Your Success with Automative SEO: Ignite Online Visibility and Outrace the Competition.Accelerate Your Business Growth Today",
      icon: <TfiVideoClapper className="text-2xl" />,
    },
  ];
  return (
    <section className="min-h-svh md:h-auto bg-slate-100 py-10 px-4 flex justify-center items-center flex-col gap-10">
      <div className="text-center flex flex-col gap-3">
        <h1 className=" text-2xl md:text-4xl font-bold">
          Our Service Offering
        </h1>
        <p className=" text-sm md:text-2xl text-slate-600 font-semibold">
          Strategies that Drive Property Market Excellence
        </p>
      </div>

      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {services.map((item) => (
         <Suspense
         key={item.id}
         fallback={
           <div className="w-full h-60 bg-slate-100 animate-pulse rounded-lg shadow-md" />
         }
       >
            <ServiceCard item={item} index={item.id} />
          </Suspense>
        ))}
      </article>

      <Button />
    </section>
  );
};

export default Service;
