import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import g1 from "../../assets/Photo gallery/JPEG/g1.jpg";
import g2 from "../../assets/Photo gallery/JPEG/g2.jpg";
import g3 from "../../assets/Photo gallery/JPEG/g3.jpg";
import g4 from "../../assets/Photo gallery/JPEG/g4.jpg";
import g5 from "../../assets/Photo gallery/JPEG/g5.jpg";
import g6 from "../../assets/Photo gallery/JPEG/g6.jpg";
import g7 from "../../assets/Photo gallery/JPEG/g7.jpg";
import g8 from "../../assets/Photo gallery/JPEG/g8.jpg";
import g9 from "../../assets/Photo gallery/JPEG/g9.jpg";
import g10 from "../../assets/Photo gallery/JPEG/g10.jpg";

const Gallery = () => {
  return (
    <div className="ga">
      <Navbar />
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <h2 className="text-5xl my-8 mt-20 font-bold text-center">
          Our Recent Works
        </h2>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={g1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={g2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={g3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={g4}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={g10}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={g6}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={g7}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={g8}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={g9}
          />
          <img
            src={g5}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
