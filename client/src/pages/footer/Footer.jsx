import React from "react";

import logo from "/public/osumare-logo.png";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import SocialMediaLink from "../../component/SocialMediaLink";
import FooterMenu from "../../component/FooterMenu";

const Footer = () => {
  return (
    <footer className=" min-h-svh md:min-h-[25vh] px-4 py-4 md:py-10 grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-8">
      <section className="flex flex-col gap-5">
        <article>
          <img
            src={logo}
            alt="logo.png"
            loading="lazy"
            className="w-18 md:w-28"
          />
          <p>
            The best digital marketing agency in pune with a proven track record
            of consistenly delivering quality service
          </p>
        </article>
        <article>
          <h1 className="font-bold">Address</h1>
          <p>
            Survey No. 43 Pathare <br /> Thube Nagar, Nagar <br /> road,
            Kharadi, Pune-14, <br />
            Maharastra, India
          </p>
        </article>
        <article className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Contacts</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-center">
              <IoIosMail className="text-xl" />
              hello@osumare.in
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <FaPhoneAlt className="text-lg" />
              +91 8459876226
            </li>
          </ul>
        </article>
      </section>
     <FooterMenu />
      <section>
        <h1 className="font-bold text-xl">Social</h1>
        <SocialMediaLink />
      </section>
    </footer>
  );
};

export default Footer;
