import React from "react";
import Navbar from "../Header/Navbar";
import Banner from "../Hero/Banner";
import Whatwedo from "../Hero/Whatwedo";
import Process from "../Process/Process";
import Stats from "../Process/Stats";
import Media from "../Process/Media";
import Footer from "../Footer/Footer";
import { Brands } from "../constants/data";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <Banner />
      <div className="container mx-auto rounded-md shadow-2xl">
        <Whatwedo />
        <Media />
        <div className="flex flex-row flex-wrap justify-center items-center py-4 bg-white">
          {Brands.map(({ src }) => (
            <img
              key={src}
              className="w-20 aspect-video rounded-sm object-contain dark:bg-gray-500 px-2"
              src={src}
              alt="my-brands"
            />
          ))}
        </div>
        <Process />
        <Stats />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
