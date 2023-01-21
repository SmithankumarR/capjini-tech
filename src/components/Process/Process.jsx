import React from "react";
import { PCImages } from "../constants/data";
import { IoIosArrowForward } from "react-icons/io";
const Process = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-lg mx-auto p-4 flex-flex-col justify-center items-center text-gray-700">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          HOW CAPJINI WORKS ?
        </h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 ">
          {PCImages.map(({ src, stg }) => (
            <div key={stg} className="">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-300 group-hover:from-cyan-300 group-hover:to-blue-300 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <img src={src} alt="" className="w-32 mx-auto rounded-lg" />
                </span>
                <IoIosArrowForward />
              </button>
              <button
                type="button"
                className="text-white my-4 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                {stg}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
