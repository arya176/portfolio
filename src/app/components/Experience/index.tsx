import React from "react";
import Image from "next/image";
import experience from "/public/images/experience.png";
export default function Experience() {
  return (
    <div className="flex flex-row bg-yellow-100] mb-28">
      <div className="font-bold mb-24  text-3xl self-center pt-36  bg-yellow-100   ">
        <ul className="list-disc text-pretty  text-[#525E75] font-thin  ">
          <li>Certificated in 3D studio Max</li>
          <li>Certificated in AutoCad 2D and 3D</li>
          <li>Certificated in Revit</li>
          <li>Certificated in V-Ray</li>
          <li>Certificated in Ms.Proiect</li>
          <li>Certificated in Adobe Photoshop</li>
          <li>Certificated in Technical Welding Inspector</li>
          <li>Certificated in excavation Inspector</li>
          <li>Certificated in Figma</li>
          <li>Familiar with JS,TS,CSS,TW, NextJS and React</li>
          <li>Civil Engineer and Interior Designer</li>
        </ul>
      </div>
      <div className="">
        <Image
          className="pt-28 pr-0 mr-0  ml-28"
          src={experience}
          alt="My png Logo"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}
