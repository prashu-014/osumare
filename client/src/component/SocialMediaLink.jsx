import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialMediaLink = () => {
  const socialMedia = [
    {
      id: 1,
      color: "text-blue-600",
      icon: <FaFacebook className="text-2xl" />,
    },
    {
      id: 2,
      color: "text-red-600",
      icon: <FaYoutube className="text-2xl" />,
    },
    {
      id: 3,
      color: "text-red-600",
      icon: <FaPinterest className="text-2xl" />,
    },
    {
      id: 4,
      color: "text-green-600",
      icon: <FaWhatsapp className="text-2xl" />,
    },
    {
      id: 5,
      color: "text-red-400",
      icon: <FaInstagram className="text-2xl" />,
    },
  ];
  return (
    <div className="flex gap-2 pt-3">
      {socialMedia.map((socialLink) => (
        <span
          className={`w-10 h-10 rounded-full ${socialLink.color}  flex items-center justify-center shadow-2xl bg-slate-100`}
        >
          {socialLink.icon}
        </span>
      ))}
    </div>
  );
};

export default SocialMediaLink;
