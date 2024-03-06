import React from "react";
import Image from "next/image";
import hand from "/public/images/hand.png";

export default function AboutMe() {
  return (
    <div>
      <div className="align-center text-center text-4xl text-[#11A068] font-extrabold pb-4">
        NICE TO MEET YOU ...
      </div>
      <h1 className=" pt-4 pb-7 text-[#080202] text-[2rem] text-center font-sans font-light">
        I am <span className="text-[#FF8080] font-mono">Arya</span>, A
        <span className="text-[#FF8080] font-mono"> Future</span> Web-Developer
      </h1>
      <div className="flex flex-row ">
        <div className="flex flex-col flex-wrap  text-center ">
          <div className="border  border-teal-950 p-6 mt-44 rounded-lg text-teal-950 hover:shadow-lg shadow-[#F0A500] hover:bg-[#D9EDBF]">
            I Love Dogs 🍯🍯🍯🍯🍯
          </div>

          <div className="border  border-teal-950 p-6   rounded-lg -teal-950 hover:shadow-lg shadow-[#F0A500] hover:bg-[#D9EDBF]">
            I Love Trade 🍯🍯🍯🍯
          </div>
          <div className="border  border-teal-950 p-6   rounded-lg -teal-950 hover:shadow-lg shadow-[#F0A500] hover:bg-[#D9EDBF]">
            I Love My Friends 🍯🍯🍯🍯
          </div>
          <div className="border  border-teal-950 p-6   rounded-lg -teal-950 hover:shadow-lg shadow-[#F0A500] hover:bg-[#D9EDBF]">
            I love Design 🍯🍯🍯🍯
          </div>
          <div className="border  border-teal-950 p-6  rounded-lg -teal-950 hover:shadow-lg shadow-[#F0A500] hover:bg-[#D9EDBF]">
            I am intrested in Computer Gaming 🍯🍯🍯🍯
          </div>
          <div className="border  border-teal-950 p-6  rounded-lg -teal-950 hover:shadow-lg shadow-[#F0A500] hover:bg-[#D9EDBF]">
            I am intrested in Photography 🍯🍯🍯
          </div>
          <div className="border  border-teal-950 p-6   rounded-lg -teal-950 hover:shadow-lg shadow-[#F0A500] hover:bg-[#D9EDBF]">
            I am intrested in Metaphysics 🍯🍯🍯
          </div>
          <div className="border  border-teal-950 p-6   rounded-lg -teal-950 hover:shadow-lg shadow-[#F0A500] hover:bg-[#D9EDBF]">
            I am intrested in History 🍯🍯🍯
          </div>
          <div className="border  border-teal-950 p-6  rounded-lg -teal-950 hover:shadow-lg shadow-[#F0A500] hover:bg-[#D9EDBF]">
            I am intrested in Politics 🍯🍯🍯
          </div>
          <div className="border  border-teal-950 p-6   rounded-lg -teal-950 hover:shadow-lg shadow-[#F0A500] hover:bg-[#D9EDBF]">
            I am intrested in Drawing & painting 🍯🍯🍯
          </div>
        </div>
        <div>
          <Image
            className="mt-40 pr-0 mr-0 ml-56"
            src={hand}
            alt="My png Logo"
            width={600}
            height={600}
          />
          <hr className="bg-blac w-[100%] h-2 border-solid border-stone-950 " />
        </div>
      </div>
    </div>
  );
}
