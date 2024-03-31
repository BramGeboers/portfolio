"use client";
import React from "react";
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useEffect } from "react";
import svg1 from "../public/chevrons-left.svg";
import Image from "next/image";
import Arrow from "../components/Arrow";

const Hero = () => {
  const app = useRef();
  const imageRef = useRef();
  const t1 = useRef();
  const t2 = useRef();
  const t3 = useRef();
  const heroContainer = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(t1.current, { y: "40%", opacity: 0, delay: 0.6 });
      gsap.from(t2.current, { y: "40%", opacity: 0, delay: 0.9 });
      gsap.from(t3.current, { y: "0%", opacity: 0, delay: 1.4 });
      gsap.from(imageRef.current, { y: "40%", opacity: 0, delay: 0.6 });
    }, app);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let bounceTl = gsap.timeline({ repeat: -1 });
    bounceTl.to(
      imageRef.current,
      { x: 100, ease: "power1.inOut", duration: 1 },
      0.1
    );
    bounceTl.to(imageRef.current, { x: 0, ease: "power1.inOut", duration: 1 });
    return () => bounceTl.kill();
  }, []);

  useEffect(() => {
    gsap.to(t1.current, {
      x: "-20%",
      scrollTrigger: {
        trigger: heroContainer.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    }),
      gsap.to(t2.current, {
        x: "20%",
        scrollTrigger: {
          trigger: heroContainer.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
  }, []);

  return (
    <div
      className="flex items-center justify-center w-[100%] h-[100vh] flex-col overflow-hidden font-mori"
      ref={heroContainer}
    >
      <div>
        <div className="flex flex-row items-baseline">
          <h1 className="text-[264px] font-semibold leading-[240px]" ref={t1}>
            BRAM
          </h1>
          <div className="absolute -translate-x-[150px] translate-y-[50px]">
            <Arrow />
          </div>
          <div ref={imageRef} className="-y-40">
            <Image src={svg1} alt="SVG1" />
          </div>
        </div>
        <h1 className="text-[264px] font-semibold leading-[240px]" ref={t2}>
          GEBOERS
        </h1>
        <div className="flex overflow-hidden translate-x-4">
          <h3 className="text-2xl" ref={t3}>
            Student, Optimist, <span className="text-blue-400">Developer</span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
