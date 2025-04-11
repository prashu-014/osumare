import React from "react";

const ServiceCard = ({ item ,index}) => {
  return (
    <div className="p-4 bg-white flex flex-col items-center rounded-xl shadow-xl " key={index}>
      <span className="bg-slate-100 rounded-full w-14 h-14 text-blue-600 flex items-center justify-center ">
        {item.icon}
      </span>
      <h1 className="font-bold py-2">{item.name}</h1>
      <p className=" text-sm text-center text-pretty md:text-sm line-clamp-4 text-slate-600">
        {item.paragraph}
      </p>
    </div>
  );
};

export default ServiceCard;
