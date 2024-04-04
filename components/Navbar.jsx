"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Squeeze as Hamburger } from "hamburger-react";

const Navbar = ({ onHoverEnter, onHoverLeave }) => {
  const handleMouseEnter = () => {
    onHoverEnter();
  };

  const handleMouseLeave = () => {
    onHoverLeave();
  };

  const [opened, setOpened] = useState(false);

  const [navOpen, setNavOpen] = useState(false);

  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
    setNavOpen(!navOpen);
  };

  const navMenuRef = useRef(null);
  const navBackGround = useRef(null);
  const tl = useRef();

  const navCom = [useRef(null), useRef(null), useRef(null)];

  const navComponent = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(
      navBackGround.current,
      {
        duration: 0.5,
        opacity: 1,
        ease: "power3.inOut",
      },
      0
    ),
      tl.current.to(
        navBackGround.current,
        {
          duration: 0,
          x: "0%",
          ease: "power3.inOut",
        },
        0
      ),
      tl.current.to(
        navComponent[0].current,
        {
          duration: 0.6,
          opacity: 1,
          y: "0%",
          ease: "power3.inOut",
        },
        0.4
      ),
      tl.current.to(
        navComponent[1].current,
        {
          duration: 0.6,
          opacity: 1,
          y: "0%",
          ease: "power3.inOut",
        },
        0.6
      ),
      tl.current.to(
        navComponent[2].current,
        {
          duration: 0.6,
          opacity: 1,
          y: "0%",
          ease: "power3.inOut",
        },
        0.8
      );
  }, []);

  useEffect(() => {
    navOpen ? tl.current.play() : tl.current.reverse();
  }, [navOpen]);

  return (
    <div>
      <div
        className="font-mori text-6xl absolute z-30 flex justify-between w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href="/"
          className=" hover:text-red-500 ease-in-out duration-500 top-10 left-10 fixed"
        >
          B
          <span className="text-green-400 hover:text-red-500 ease-in-out duration-500">
            G
          </span>{" "}
        </Link>
        <div
          className="top-10 right-10 fixed"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Hamburger
            toggled={isOpen}
            rounded
            toggle={toggleNav}
            className="cursor-none"
          />
        </div>
      </div>
      <div
        className="h-[100vh] w-full bg-black fixed top-0 left-0 z-20 flex items-center justify-center opacity-0 -translate-x-full"
        ref={navBackGround}
      >
        <div className="flex flex-col font-mori" ref={navMenuRef}>
          <Link
            href="/"
            className="bg-black-200 text-red-950 leading-[230px] text-[260px] flex hover:text-green-600 ease-in-out transition-all duration-700"
            ref={navCom[0]}
          >
            <div className="translate-y-full opacity-0" ref={navComponent[0]}>
              iNDEX
            </div>
          </Link>

          <Link
            href="/about"
            className="bg-black-200 leading-[230px] text-[260px] flex hover:text-green-600 ease-in-out transition-all duration-700"
            ref={navCom[1]}
          >
            <div
              className="translate-y-full opacity-0"
              ref={navComponent[1]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              aBOUT
            </div>
          </Link>
          <Link
            href="/contact"
            className="bg-black-200 leading-[230px] text-[260px] flex hover:text-green-600 ease-in-out transition-all duration-700"
            ref={navCom[2]}
          >
            <div
              className="translate-y-full opacity-0"
              ref={navComponent[2]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              cONTACT
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
