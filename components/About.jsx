"use client";
import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import bram from "../public/images/20190815-IMG_4287.webp";
import image2 from "../public/images/museum.jpeg";
import Image from "next/image";
import { hobbies } from "../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hobbyitem = ({ hobby }) => {
  return (
    <div className="border-white px-2 py-1 text-[75px] font-mori">
      <div>
        <p className=" border-2 rounded-full px-6">{hobby.name}</p>
      </div>
    </div>
  );
};

const About = () => {
  const app = useRef();
  const t1 = useRef();
  const t2 = useRef();
  const imageRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.from(t1.current, {
        opacity: 0,
        delay: 0.2,
        duration: 1.5,
        ease: "power2.in",
      });
      gsap.from(t2.current, {
        opacity: 0,
        delay: 1.6,
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.from(imageRef.current, {
        opacity: 0,
        delay: 1.9,
        duration: 0.5,
        ease: "power2.in",
      });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-[100%] flex-col font-mori font-semibold text-center">
        <p className="text-[208px] mt-[200px] mb-[-80px]" ref={t1}>
          hi!
        </p>
        <p className="text-[100px]" ref={t2}>
          I'm bram
        </p>

        <Image
          src={bram}
          className="object-contain h-80 w-full mt-10 mb-20"
          ref={imageRef}
        />
      </div>
      <div className="flex w-full items-center justify-center overflow-visible pt-20 text-center font-semibold">
        <svg
          width="562"
          height="160"
          viewBox="0 -8 562 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 39.0635C96 104.563 160.058 120.834 207 100.5C250.44 81.6826 287.928 -1.79452 337 7.5C383.098 16.2314 429.8 69.6453 472.46 67.9909C515.121 66.3365 544.342 45.0136 557 2"
            id="curve"
            // stroke="white"
          />
          <text className="text-[46px] font-mori tracking-widest">
            <textPath href="#curve" fill="white">
              My passions and hobbies
            </textPath>
          </text>
        </svg>
      </div>
      <div className="flex flex-row flex-wrap max-w-[1300px] items-center justify-center mx-auto py-20">
        {hobbies.map((hobby, index) => (
          <Hobbyitem key={index} hobby={hobby} />
        ))}
      </div>
      <div className="my-20 flex flex-row items-center justify-center gap-32 text-lg">
        <div className="flex flex-col max-w-[450px]">
          <p>
            Hello! I’m Bram Geboers, a 20-year-old software developer currently
            pursuing a degree in Applied Computer Science at UC Leuven Limburg.
            This year, I’m excited to be expanding my academic and cultural
            horizons by spending a semester abroad at Vilnius University in
            Lithuania. My passion lies in creating innovative and efficient
            software solutions, blending theory with hands-on projects to drive
            impactful results. Welcome to my portfolio, where you can explore my
            work and journey in the world of tech!
          </p>
        </div>
        <div>
          <Image
            src={image2}
            className="object-contain h-[600px] w-full mt-10 mb-20"
          />
        </div>
      </div>
    </>
  );
};

export default About;
