"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaArrowTurnDown } from "react-icons/fa6";
import { references } from "../constants";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

const ReferenceCard = ({ reference }) => {
  const [hover, SetHover] = useState(false);

  const tl = useRef();

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
        ease: "power3.inOut",
        filter: "blur(0px)", // initial blur value
        scale: 1,
        onComplete: () => {
          // Optional: You can remove the blur effect after the animation is complete
          imageRef.current.style.filter = "none";
        },
      },
      0.1
    );
  }, []);

  useEffect(() => {
    hover ? tl.current.play() : tl.current.reverse();
  }, [hover]);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
  };

  return (
    <Link
      href="/"
      className="p-10 border-b-4 text-[28px] m-1 border-white cursor-pointer relative flex flex-row justify-between"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div>
        <p>{reference.title}</p>
      </div>
      <div className="flex flex-row gap-4">
        <p>{reference.tech1}</p>
        <p>{reference.tech2}</p>
        <p>{reference.tech3}</p>
      </div>
      <div>
        <BsArrowRight size={70} />
      </div>

      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="fixed top-0 left-0 pointer-events-none"
      >
        <Image
          src={reference.image}
          className="w-28 h-28 blur-lg scale-150 opacity-0 -translate-y-2/4 -translate-x-2/4 pointer-events-none"
          ref={imageRef}
        />
      </motion.div>
    </Link>
  );
};

const References = () => {
  const References = () => {
  return (
    <div className="p-10 w-[80%] mx-auto">
      <div>
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
}
export default References
