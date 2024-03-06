import React from "react";
import profileBear from "/public/images/profileBear.gif";
import Image from "next/image";
export default function Header() {
  return (
    <div className="flex flex-row mt-0 pt-[4rem] ">
      <div className="">
        <Image
          className="}"
          src={profileBear}
          alt="My png Logo"
          width={700}
          height={700}
        />
      </div>
      <h2 className="w-1/2  text-[#5F8670] m-0 p-0 text-[3rem] self-center pt-24 font-sans">
        <q>
          Give someone a program; you frustrate them for a day; teach them how
          to program, and you frustrate them for a lifetime
        </q>
        <br />
        <span className="text-[2rem] pl-2"> David Leinweber.</span>
      </h2>
    </div>
  );
}
