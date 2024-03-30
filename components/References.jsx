"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaArrowTurnDown } from "react-icons/fa6";
import Image from "next/image";
import { gsap } from "gsap";
import { references } from "../constants";

const ReferenceCard = ({ reference }) => {
  const [hover, SetHover] = useState(false);

  const tl = useRef();

  const tech1 = useRef();
  const tech2 = useRef();
  const tech3 = useRef();

  const toggleHover = () => {
    SetHover(!hover);
  };

  const imageRef = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(
      imageRef.current,
      {
        duration: 0.3,
        opacity: 1,
        y: "0",
        ease: "power3.inOut",
      },
      0.1
    ),
      tl.current.to(
        tech1.current,
        {
          duration: 0.5,
          opacity: 1,
          y: "0",
          ease: "power3.inOut",
        },
        0.1
      ),
      tl.current.to(
        tech2.current,
        {
          duration: 0.5,
          opacity: 1,
          y: "0",
          ease: "power3.inOut",
        },
        0.2
      ),
      tl.current.to(
        tech3.current,
        {
          duration: 0.5,
          opacity: 1,
          y: "0",
          ease: "power3.inOut",
        },
        0
      );
  }, []);

  useEffect(() => {
    hover ? tl.current.play() : tl.current.reverse();
  }, [hover]);

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className="p-10 border-b-4 border-white cursor-pointer relative flex flex-row h-[200px] items-center"
    >
      <Link
        href={`/references/${reference.link}`}
        className="text-[50px] pr-40"
      >
        {reference.title}
      </Link>

      <div className="overflow-hidden flex text-green-600 text-3xl pointer-events-none translate-y-32 translate-x-10">
        <p className="translate-y-full opacity-0" ref={tech1}>
          {reference.tech1}
        </p>
      </div>

      <div
        className="rounded-md object-cover object-center translate-y-20 opacity-0 pointer-events-none justify-around"
        ref={imageRef}
      >
        <Image
          src={reference.image}
          className="w-[350px] h-[350px] ease-in-out"
        />
      </div>

      <div className="overflow-hidden flex text-red-600 text-3xl pointer-events-none -translate-y-32 -translate-x-72">
        <p className="-translate-y-full opacity-0" ref={tech2}>
          {reference.tech2}
        </p>
      </div>

      <div className="overflow-hidden flex text-yellow-600 text-3xl pointer-events-none translate-y-16 -translate-x-64">
        <p className="translate-y-full opacity-0" ref={tech3}>
          {reference.tech3}
        </p>
      </div>
    </div>
  );
};

const References = () => {
  return (
    <div className="p-10 w-[80%] mx-auto">
      <div>
        <div>
          <h2 className="flex flex-row items-center text-[50px]">
            Geselecteerde projecten <FaArrowTurnDown className="pl-4" />
          </h2>
        </div>
      </div>
      <div className="flex flex-col">
        {references.map((reference, index) => (
          <ReferenceCard key={index} reference={reference} />
        ))}
      </div>
    </div>
  );
};

export default References;
