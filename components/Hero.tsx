"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-10 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Image
            src="/inari.webp"
            alt="logo"
            width={165}
            height={56}
            className="mb-4 -mt-10"
            priority
          />
          <h1 className="uppercase tracking-[0.5rem] text-3xl text-center text-blue-100 max-w-80">
            Inari Agency
          </h1>
          <div className="leading-snug my-4">
            <h2 className="text-center text-[40px] md:text-[3rem] lg:text-[3.75rem] tracking-wide font-bold ">
              Transforming Concepts Into Seamless{" "}
              <span className="text-purple">User Experiences</span>
            </h2>
          </div>
          <p className="text-center"></p>
          <a href="#about">
            <MagicButton
              title="About Us"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
