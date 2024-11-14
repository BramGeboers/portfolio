"use client";
import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import svg1 from "../public/chevrons-left.svg";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arrow from "../components/Arrow";
import Arrow2 from "../components/Arrow2";

const Hero = () => {
  const app = useRef();
  const imageRef = useRef();
  const t1 = useRef();
  const t2 = useRef();
  const t3 = useRef();
  const heroContainer = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.from(t1.current, { y: "40%", opacity: 0, delay: 0.6 });
      gsap.from(t2.current, { y: "40%", opacity: 0, delay: 0.9 });
      gsap.from(t3.current, { y: "0%", opacity: 0, delay: 1.4 });
      gsap.from(imageRef.current, { y: "40%", opacity: 0, delay: 0.6 });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex items-center justify-center w-full h-screen flex-col overflow-hidden font-mori font-semibold"
      ref={heroContainer}
    >
      <div>
        <div className="flex flex-row items-baseline">
          <h1
            className="text-[64px] sm:text-[100px] sm:leading-[85px] md:text-[144px] lg:text-[220px] xl:text-[264px] leading-[48px] md:leading-[140px] lg:leading-[240px]"
            ref={t1}
          >
            BRAM
          </h1>
          <div className="hidden xl:block absolute -translate-x-[50px] md:-translate-x-[100px] lg:-translate-x-[150px] translate-y-[20px] md:translate-y-[30px] lg:translate-y-[50px]">
            <Arrow />
          </div>
          <div className="xl:hidden block absolute w-full h-full -translate-x-[50px] md:-translate-x-[100px] lg:-translate-x-[150px] translate-y-[20px] md:translate-y-[30px] lg:translate-y-[50px]">
            <Arrow2 />
          </div>
          <div ref={imageRef}>
            <Image
              src={svg1}
              alt="SVG1"
              className="contain w-[50px] md:w-[120px] lg:w-[180px] xl:w-[220px] h-auto"
            />
          </div>
        </div>
        <h1
          className="text-[64px] sm:text-[100px] sm:leading-[85px] md:text-[144px] lg:text-[220px] xl:text-[264px] leading-[48px] md:leading-[140px] lg:leading-[240px]"
          ref={t2}
        >
          GEBOERS
        </h1>
        <div className="flex overflow-hidden translate-x-2 md:translate-x-4">
          <h3 className="text-base md:text-2xl" ref={t3}>
            Student, Optimist, <span className="text-blue-400">Developer</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
