import { useEffect } from "react";
import Image from "next/image";
import bgImg from "/Users/aryamacbook/Desktop/next/portfolio/public/images/234360563223.png";
import bgImg2 from "/Users/aryamacbook/Desktop/next/portfolio/public/images/www.png";
import bgImg3 from "/Users/aryamacbook/Desktop/next/portfolio/public/images/hand.png";

export default function Home() {
  // useEffect(() => {
  //   const heading = document.getElementById("h2");
  //   heading?.addEventListener("mousemove", handleRotate);

  //   return () => {
  //     heading.removeEventListener("mousemove", handleRotate);
  //   };
  // });

  // const handleRotate = () => {
  //   const heading = document.getElementById("h2");
  //   heading.style.transform = `rotate(${32}deg)`;
  // };
  return (
    <main className="flex min-h-screen flex-col items-center bg-yellow-100 text-neutral-950 font-bold m-0 p-0 ">
      <div className="">
        <nav className="bg-yellow-100 flex flex-row justify-items-end  m-0 pt-0 pl-3 w-[100%]  pb-10 text-[#11A068] ">
          <div className="p-5 border border-t-0 rounded-br-3xl rounded-bl-3xl border-teal-950 mr-2 bg-[#CDF0EA]">
            HOME
          </div>
          <div className="p-5 border border-t-0 rounded-br-3xl rounded-bl-3xl border-teal-950 mr-2 bg-[#FDE2E2]">
            DESIGNS
          </div>
          <div className="p-5 border border-t-0 rounded-br-3xl rounded-bl-3xl border-teal-950 mr-2 bg-[#CAF7E3]">
            ABOUT
          </div>
          <div className="p-5 border border-t-0 rounded-br-3xl rounded-bl-3xl border-teal-950 bg-[#F9F5E7]">
            MY TIME
          </div>
        </nav>
        <h1 className="pt-24 pl-[40%] pb-7 font-sans font-extrabold text-[#0A1D37] text-[4rem] mr-72">
          I am <span className="text-[#FF597B] font-mono">Arya</span>
        </h1>
        <div id="h2" className="">
          <h2 className="pt-0 mt-0 pl-[30%]  ml-64 font-mono font-extrabold text-[#0A1D37] text-4xl rotate-[12deg] shadow-xl ">
            A <span className="text-[#FF597B]">Future </span>Web-Developer
          </h2>
        </div>

        <div className="flex flex-row mt-0">
          <div className="">
            <Image
              className=""
              src={bgImg}
              alt="My png Logo"
              width={700}
              height={700}
            />
          </div>
          <h2 className="w-1/2 h-56 text-[#5F8670] m-0 p-0 text-3xl self-center pt-14 font-medium">
            I Am a Civil Engineer and Interior Designer but At Least I have
            decided to be a web developer
          </h2>
        </div>
      </div>
      <hr className="bg-[#C3EDC0] w-[60%] h-2 border-solid border-stone-950 mb-20 self-start" />
      <div className="flex flex-row bg-yellow-100] pb-48">
        <div className="font-bold mb-24  text-3xl self-center pt-40  bg-yellow-100   ">
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
          </ul>
        </div>
        <div className="">
          <Image
            className="pt-40 pr-0 mr-0 rounded-br-2xl rounded-tr-2xl rounded-tl-2xl pl-9"
            src={bgImg2}
            alt="My png Logo"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="align-center text-center text-4xl text-[#11A068] font-extrabold pb-8">
        DO YOU NOW ME?
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col flex-wrap  text-center pb-36">
          <div className="border  border-teal-950 p-6 mt-44 rounded-lg ">
            I Love Dogs
          </div>
          <div className="border  border-teal-950 p-6   rounded-lg">
            I Love Trade
          </div>
          <div className="border  border-teal-950 p-6  rounded-lg">
            I am intrested in Photography
          </div>
          <div className="border  border-teal-950 p-6   rounded-lg">
            I am intrested in Drawing & painting
          </div>
          <div className="border  border-teal-950 rounded-lg">
            I am intrested in Computer Gaming
          </div>
          <div className="border  border-teal-950 p-6   rounded-lg">
            I am intrested in Metaphysics
          </div>
          <div className="border  border-teal-950 p-6   rounded-lg">
            I am intrested in History
          </div>
          <div className="border  border-teal-950 p-6  rounded-lg">
            I am intrested in Politics
          </div>
          <div className="border  border-teal-950 p-6   rounded-lg">
            I love Design
          </div>
          <div className="border  border-teal-950 p-6   rounded-lg">
            I Love My Friends
          </div>
        </div>
        <div>
          <Image
            className="mt-40 pr-0 mr-0 ml-56"
            src={bgImg3}
            alt="My png Logo"
            width={600}
            height={600}
          />
          <hr className="bg-[#C3EDC0] w-[100%] h-2 border-solid border-stone-950 " />
        </div>
      </div>

      <div className="mt-32 bg-[#C3EDC0] w-[100%] pt-36 pb-8">
        <footer id="footer" className="font-normal">
          <section className="text-center">
            <a href="https://www.facebook.com/arya.messenger" target="_self">
              <i className="fab fa-facebook-square"></i> Facebook
            </a>
            <a href="https://linkedin.com/arya-rr-5a3a7595" target="_self">
              <i className="fab fa-linkedin"></i> linkedin
            </a>
            <a href="https://twitter.com" target="_self">
              <i className="fab fa-twitter-square"></i> Twitter
            </a>
            <a href="https://www.instagram.com" target="_self">
              <i className="fab fa-instagram-square icon"></i> Instagram
            </a>
            <a href="http://github.com/arya176" target="_self">
              <i className="fab fa-github-square"></i> Github
            </a>
          </section>

          <section className="text-center">
            <h5>resources:</h5>
            <div className="source">
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/dinosoftlabs"
                title="DinosoftLabs"
                target="_self"
              >
                DinosoftLabs
              </a>{" "}
              from{" "}
              <a
                href="https://www.flaticon.com/"
                title="Flaticon"
                target="_self"
              >
                www.flaticon.com
              </a>
            </div>
          </section>
          <p className="text-center pt-10 text-sm">
            © Copyright 2024. Designed by Arya .All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
