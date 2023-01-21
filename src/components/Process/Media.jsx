import React from "react";
import Gini from "../../assets/images/jini.png";

import { Link } from "react-router-dom";
import Brand from "../Footer/Brand";
const Media = () => {
  return (
    <>
      <div className="container py-14 mx-auto bg-white">
        <h2 className="my-8 text-center  text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          OUR SERVICES
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <Link to="/services">
            <img src={Gini} alt="my services" className="object-contain" />
          </Link>
        </div>
        <h2 className="my-8 text-center  text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          OUR EXPERTISE IN LAPTOP BRANDS
        </h2>
        <Brand />
      </div>
    </>
  );
};

export default Media;
