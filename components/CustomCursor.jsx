"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Mousefollow = ({ isHovering }) => {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const { x, y } = point;
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    const element = ref.current;
    const tl = gsap.timeline();

    if (isHovering) {
      tl.to(element, {
        duration: 0.3,
        width: 80,
        height: 80,
        backgroundColor: "#34d399",
      });
    } else {
      tl.to(element, {
        duration: 0.3,
        width: 50,
        height: 50,
        backgroundColor: "#ef4444",
      });
    }
  }, [isHovering]);

  return (
    <div
      ref={ref}
      className="lg:block fixed hidden -top-20 -left-20 w-[50px] h-[50px] rounded-full z-[1000] bg-red-500 mix-blend-difference pointer-events-none"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    ></div>
  );
};

export default Mousefollow;
