import React from "react";
const Stats = () => {
  return (
    <section className="xt-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-5xl md:text-4xl font-extrabold">10+</dt>
            <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">
              Experience
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-5xl md:text-4xl font-extrabold">5k+</dt>
            <dd className="font-light text-2xl  text-gray-500 dark:text-gray-400">
              services
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-5xl md:text-4xl font-extrabold">1k+</dt>
            <dd className="font-light  text-2xl  text-gray-500 dark:text-gray-400">
              {" "}
              Customers
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-5xl md:text-4xl font-extrabold">10k+</dt>
            <dd className="font-light text-2xl  text-gray-500 dark:text-gray-400">
              {" "}
              Lines of Code
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Stats;
