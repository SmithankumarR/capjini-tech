import React from "react";
import Navbar from "../Header/Navbar";
import Management from "../Hero/Management";
import MainTeam from "../Hero/MainTeam";
import MyTeam from "../Hero/MyTeam";
import Contact from "../Footer/Contact";
import Footer from "../Footer/Footer";
const About = () => {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <Management />
      <div className="container mx-auto rounded-md shadow-2xl">
        <MainTeam />
        <MyTeam />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default About;
