import React from "react";
import { Images } from "../constants/data";

const Whatwedo = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            What do we do..
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Quality in a service or product is not what you put into it. It’s
            what the client or customer gets out of it.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ">
          {Images.map(({ src, title }) => (
            <div
              key={title}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                src={src}
                alt="images"
                className="rounded-t-lg w-full object-cover mx-auto"
              />
              <div className="p-5">
                <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
