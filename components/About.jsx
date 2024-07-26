"use client";
import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import bram from "../public/images/20190815-IMG_4287.webp";
import Image from "next/image";
import { hobbies } from "../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hobbyitem = ({ hobby }) => {
  return (
    <div className="border-white px-2 py-1 text-[75px] font-mori">
      <div>
        <p className=" border-2 rounded-full px-4">{hobby.name}</p>
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
      <div className="flex items-center justify-center w-[100%] h-[100vh] flex-col font-mori font-semibold text-center">
        <p className="text-[208px] mt-[400px] mb-[-80px]" ref={t1}>
          hi!
        </p>
        <p className="text-[100px]" ref={t2}>
          I'm bram
        </p>

        <Image
          src={bram}
          className="object-contain h-80 w-full my-20"
          ref={imageRef}
        />
      </div>
      <div className="flex flex-row flex-wrap max-w-[1300px] items-center justify-center mx-auto py-20">
        {hobbies.map((hobby, index) => (
          <Hobbyitem key={index} hobby={hobby} />
        ))}
      </div>
    </>
  );
};

export default About;
