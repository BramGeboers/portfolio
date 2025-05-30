"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { references } from "../constants";
import Image from "next/image";
import { gsap } from "gsap";
import { AiOutlineFileSearch } from "react-icons/ai";

const ReferenceCard = ({ reference, onHoverEnter, onHoverLeave }) => {
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    onHoverEnter();
  };

  const handleMouseLeave = () => {
    onHoverLeave();
  };

  const t1 = useRef();

  const techComponent = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const toggleActive = () => {
    setActive(!active);
  };

  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(
      t1.current,
      {
        duration: 0.5,
        height: "auto",
        ease: "power3.inOut",
      },
      0
    ),
      tl.current.to(
        techComponent[0].current,
        {
          duration: 0.6,
          y: 0,
          ease: "power3.inOut",
          delay: 0.2,
        },
        0
      ),
      tl.current.to(
        techComponent[1].current,
        {
          duration: 0.6,
          y: 0,
          ease: "power3.inOut",
          delay: 0.4,
        },
        0
      );
    tl.current.to(
      techComponent[2].current,
      {
        duration: 0.6,
        y: 0,
        ease: "power3.inOut",
        delay: 0.6,
      },
      0
    ),
      tl.current.to(
        techComponent[3].current,
        {
          duration: 0.6,
          y: 0,
          ease: "power3.inOut",
          delay: 0.8,
        },
        0
      );
  }, []);

  useEffect(() => {
    active ? tl.current.play() : tl.current.reverse();
  }, [active]);

  return (
    <div className="border-b-[1px] border-white mb-4">
      <div
        className="text-lg md:text-[28px] font-mori font-light hover:font-semibold transition-all flex flex-row justify-between items-center bg-black px-3 md:p-1- lg:p-8 lg:mt-12"
        onClick={toggleActive}
      >
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p className="text-[36px] md:text-[70px] lg:text-[86px] xl:text-[110px] 2xl:text-[160px] uppercase">
            {reference.title}
          </p>
        </div>
        <svg
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={
            active
              ? "rotate-90 transition-all ease-in-out"
              : "transition-all ease-in-out"
          }
          width="50"
          height="50"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 28L77 28"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M53 4L76.9167 27.9167L53 51.8333"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        className="flex flex-col md:flex-row items-center gap-4 justify-evenly mb-10 h-0 overflow-hidden z-0"
        ref={t1}
      >
        <Image className="h-auto w-60 md:w-80 m-4" src={reference.image} />
        <div>
          <ul className="flex flex-col gap-2 md:gap-4 text-base md:text-2xl">
            <li className="text-green-500 overflow-hidden">
              <p className="translate-y-full" ref={techComponent[0]}>
                {reference.tech1}
              </p>
            </li>
            <li className="text-red-500 overflow-hidden">
              <p className="translate-y-full" ref={techComponent[1]}>
                {reference.tech2}
              </p>
            </li>
            <li className="text-yellow-500 overflow-hidden">
              <p className="translate-y-full" ref={techComponent[2]}>
                {reference.tech3}
              </p>
            </li>
            {reference.tech4 && (
              <li className="text-blue-500 overflow-hidden">
                <p className="translate-y-full" ref={techComponent[3]}>
                  {reference.tech4}
                </p>
              </li>
            )}
          </ul>
        </div>

        <div className="max-w-[90%] md:max-w-[500px]">
          <p className="pb-4 text-sm md:text-base">{reference.description}</p>
          <Link
            href={`cases/${reference.link}`}
            className="text-blue-500 text-sm md:text-base"
          >
            Discover More ➜
          </Link>
        </div>
      </div>
    </div>
  );
};

const References = ({ onHoverEnter, onHoverLeave }) => {
  return (
    <div className="p-4 md:p-10 w-full md:w-[90%] mx-auto">
      <div className="pb-4 md:pb-10">
        <h2 className="flex flex-row items-center text-2xl mb-4 md:text-4xl">
          Selected Projects
          <AiOutlineFileSearch className="ml-3" color="red" />
        </h2>
      </div>
      <div className="flex flex-col">
        {references.map((reference, index) => (
          <ReferenceCard
            key={index}
            reference={reference}
            onHoverEnter={onHoverEnter}
            onHoverLeave={onHoverLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default References;
