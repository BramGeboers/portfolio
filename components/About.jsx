"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import bram from "../public/images/IMG_4851_CROPPPED.png";
import image2 from "../public/images/museum.jpeg";
import { hobbies } from "../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hobbyitem = ({ hobby }) => (
  <div className="border-white px-2 py-1 text-[8vw] md:text-[75px] font-mori">
    <div>
      <p className="border-2 rounded-full px-6">{hobby.name}</p>
    </div>
  </div>
);

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
      <div className="flex items-center justify-center w-full h-[85vh] mt-[15vh] flex-col font-mori font-semibold text-center">
        <p
          className="text-[30vw] md:text-[208px] mt-[15vw] mb-[-8vw] md:mt-[200px] md:mb-[-80px]"
          ref={t1}
        >
          hi!
        </p>
        <p className="text-[15vw] md:text-[100px]" ref={t2}>
          I'm Bram
        </p>

        <Image
          src={bram}
          className="object-contain h-80 w-full mt-10 mb-20 pb-5"
          ref={imageRef}
        />
      </div>
      <div className="flex w-full items-center justify-center overflow-visible pt-10 md:pt-20 text-center font-semibold">
        <svg
          width="562"
          height="160"
          viewBox="0 -8 562 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="px-4 lg:px-0"
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
      <div className="flex flex-wrap max-w-[95%] md:max-w-[1300px] items-center justify-center mx-auto py-10 md:py-20">
        {hobbies.map((hobby, index) => (
          <Hobbyitem key={index} hobby={hobby} />
        ))}
      </div>
      <div className="my-10 md:my-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32 text-base md:text-lg">
        <div className="flex flex-col max-w-[90%] md:max-w-[450px] text-center md:text-left lg:px-0 px-6">
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
            className="object-contain  sm:h-[600px] h-full w-full mt-10 mb-20 lg:px-0 px-6 max-w-96"
          />
        </div>
      </div>
    </>
  );
};

export default About;
