"use client";
import React, { useEffect, useState } from "react";
import Cards from "./cards";
import Scrollable from "./scrollable";
import Contact from "./contact";
import Hero from "./hero";
import About from "./about";
import Accomplishments from "./accomplishments";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <section id="container" className="">
      <Hero />
      <div className="md:py-16 relative">
        <div className="bg-white  min-h-screen shadow-2xl absolute top-0 left-0 right-0 border-t-2 border-gray-300">
          <Cards />
          <Scrollable />
          <About />
          <Accomplishments />
          <Contact />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
