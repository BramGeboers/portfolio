"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowTurnDown } from "react-icons/fa6";
import { references } from "../constants";
import Image from "next/image";
import { gsap } from "gsap";

const ReferenceCard = ({ reference }) => {
  const [active, setActive] = useState(false);

  const t1 = useRef();

  const techComponent = [useRef(null), useRef(null), useRef(null)];

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
    );
  }, []);

  useEffect(() => {
    active ? tl.current.play() : tl.current.reverse();
  }, [active]);

  return (
    <div className="border-b-[1px] border-white ">
      <div
        className="text-[28px] font-thin hover:font-medium transition-all cursor-pointer flex flex-row justify-between items-center bg-black"
        onClick={toggleActive}
      >
        <div>
          <p className="text-[165px] uppercase">{reference.title}</p>
        </div>
        <svg
          className={
            active
              ? "rotate-90 transition-all ease-in-out"
              : "transition-all ease-in-out"
          }
          width="82"
          height="82"
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
        className="flex flex-row items-center gap-4 justify-evenly mb-10 h-0 overflow-hidden z-0"
        ref={t1}
      >
        <Image className="h-60 w-80" src={reference.image} />
        <div>
          <ul className="flex flex-col gap-4 text-2xl">
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
          </ul>
        </div>

        <div className="max-w-[500px]">
          <p className="pb-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
          <Link href={`cases/${reference.link}`} className="text-blue-500">
            Case Study ➜
          </Link>
        </div>
      </div>
    </div>
  );
};

const References = () => {
  return (
    <div className="p-10 w-[80%] mx-auto">
      <div className="pb-10">
        <h2 className="flex flex-row items-center text-[50px]">
          Geselecteerde projecten <FaArrowTurnDown className="pl-4" />
        </h2>
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
