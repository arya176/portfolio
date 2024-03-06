"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SwitchLamp from "./components/SwitchLamp";
import Navbar from "../app/components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      id="content"
      className={`flex flex-col flex-wrap items-center bg-${
        darkMode ? "black" : "yellow-100"
      } text-neutral-950 font-bold m-0 p-0`}
    >
      <nav
        className={`bg-${
          darkMode ? "black" : "yellow-100"
        } flex flex-row m-0 pt-0 pl-3 w-[100%] text-[#11A068]`}
      >
        <Navbar />

        <SwitchLamp darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
      <Header />

      <hr className=" w-[60%] h-2 border-solid border-stone-950 self-start mb-14" />
      <Experience />
      <AboutMe />
      <Footer />
    </main>
  );
}
