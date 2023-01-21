import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import bg from "../../assets/bg2.jpg";
const Management = () => {
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center items-center">
        <img
          src={bg}
          alt="my services"
          className="object-cover w-full h-[40vh]"
        />
      </div>
      <div className="sm:flex sm:items-center sm:justify-between absolute top-44 left-0 right-1 flex-col">
        <h3 className="text-slate-100 text-3xl mx-auto mb-8">Find us on</h3>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 mx-8 ">
          <a
            href="https://www.facebook.com/Capjini?mibextid=ZbWKwL"
            className="text-slate-100 hover:text-cyan-300 dark:hover:text-white text-3xl"
          >
            <FaFacebook />
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="https://instagram.com/capjinitechnologies?igshid=ZDdkNTZiNTM="
            className="text-slate-100 hover:text-cyan-300 dark:hover:text-white text-3xl"
          >
            <FaInstagram />
            <span className="sr-only">Instagram page</span>
          </a>
          <a
            href="https://www.linkedin.com/company/capjini-technologies-pvt-ltd/"
            className="text-slate-100 hover:text-cyan-300 dark:hover:text-white text-3xl"
          >
            <FaLinkedinIn />
            <span className="sr-only">Linkedin page</span>
          </a>
          <a
            href="https://youtube.com/@capjinitechnologies3993"
            className="text-slate-100 hover:text-cyan-300 dark:hover:text-white text-3xl"
          >
            <FaYoutube />
            <span className="sr-only">Youtube page</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Management;
