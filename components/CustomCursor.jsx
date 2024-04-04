"use client";

import React from "react";

import { useRef, useEffect, useState } from "react";

const CURSOR_COLORS = {
  h1: "green-400",
  button: "orange-500",
  default: "sky-500",
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("sky-500");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 800);
    };
    const handleMouseOver = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);
  return (
    <>
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-300 rounded-full w-3 h-3 bg-${cursorColor}`}
      />
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`p-0 fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-500 rounded-full w-8 h-8 border-2 border-${cursorColor} `}
      >
        <div
          className={`w-8 h-8 ${
            clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"
          } -translate-x-[1px] -translate-y-[1px] rounded-full bg-${cursorColor} ease-in transition-all duration-500 -z-10`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
