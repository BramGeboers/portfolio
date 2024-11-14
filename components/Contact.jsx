import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useScroll } from "framer-motion";

const Contact = () => {
  const container = useRef();
  const texts = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        text.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
      });
    });
  }, [scrollYProgress]);

  return (
    <div className="overflow-hidden relative">
      <div className="gap-8 mt-[137px] h-[726px] ml-[30vw] flex flex-col">
        <ul className="flex flex-col md:pl-0 pl-12">
          <li>bramge0002@gmail.com</li>
          <li>+32)04-9464-000</li>
          <li>info@bramgeboers.be</li>
        </ul>

        <ul className="flex flex-col md:pl-0 pl-12 items-start">
          <li>
            <Link href={"/"}>index</Link>
          </li>
          <li className="pl-2">
            <Link href={"/"}>home</Link>
          </li>
          <li className="pl-2">
            <Link href={"/about"}>about</Link>
          </li>
          <li className="pl-2">
            <Link href={"/contact"}>contact</Link>
          </li>
          <li>
            <Link href={"/cases"}>cases</Link>
          </li>
          <li className="pl-2">
            <Link href={"/cases/mycareer"}>mycareer</Link>
          </li>
          <li className="pl-2">
            <Link href={"/cases/car4rent"}>car4rent</Link>
          </li>
          <li className="pl-2">
            <Link href={"/cases/tychothoelen"}>tychothoelen</Link>
          </li>
        </ul>
      </div>
      <div ref={container}>
        <svg
          className="md:h-[750px] h-[100vh] absolute md:top-[6rem] top-[5rem] pointer-events-none md:py-2 overflow-hidden"
          width="1920"
          height="726"
          viewBox="0 0 1920 726"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-13.5 3C256 440.5 532.5 819.896 873 698C1144.5 600.805 1019.89 154.22 1249 228C1396.5 275.5 1534.5 566.5 1671 557.5C1807.5 548.5 1901 432.5 1941.5 198.5"
            fill="none"
            id="curve"
          />
          <text className="text-3xl">
            {Array.from({ length: 4 }).map((_, i) => (
              <textPath
                key={i}
                ref={(ref) => (texts.current[i] = ref)}
                href="#curve"
                startOffset={i * 37.5 + "%"}
                fill="white"
              >
                Hello there! Hello there! Hello there! Hello there! Hello there!
                Hello there!
              </textPath>
            ))}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Contact;
