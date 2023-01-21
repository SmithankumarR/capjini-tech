import React from "react";
import { MainTeamImages } from "../constants/data";
const MainTeam = () => {
  return (
    <div className="container mx-auto">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Executive Team
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Talent wins games, but teamwork and intelligence win championships
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {MainTeamImages.map(({ src, title, position }) => (
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:shadow-slate-800">
                <img
                  className="w-[300px] rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={src}
                  alt="Bonnie Avatar"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="my-8 text-center  text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Vision & Mission
          </h2>
          <div className="space-y-4">
            <details
              className="group border-l-4 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden  bg-left"
              open
            >
              <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-2xl font-bold text-gray-900">Vision</h2>

                <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                Being the best means providing outstanding quality, service and
                value, so that we make every customer in smile.
              </p>
            </details>

            <details className="group border-l-4  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden bg-left">
              <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-2xl font-bold text-gray-900">Mission</h2>

                <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                Capjini enables you to transform your organization and improve
                performance. We aim to empower you to respond more quickly and
                intuitively to changing market dynamics. By bolstering your
                ability to harness the right technology, we help you become more
                agile and competitive. To create a transparent, principles &
                systems-based organization that empowers employees at all levels
                to take initiative, innovative, learn and grow, while working
                with enthusiasm and commitment. Customer matter, results count.
              </p>
            </details>
            <details className="group border-l-4  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden bg-left">
              <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-2xl font-bold text-gray-900">Values</h2>

                <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                Achievement , Challenge , Contribution , Determination , Growth
                , Loyalty Responsibility , Trustworthiness
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainTeam;
