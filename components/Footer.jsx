"use client";
import React from "react";
import DateTime from "@/components/DateTime";
import { motion } from "framer-motion";

const Footer = () => {
  const pathVariant1 = {
    hidden: {
      pathLength: 0,
      pathOffset: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const pathVariant2 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.5,
        delay: 2.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col p-4 sm:p-10">
      <div className="flex flex-col xl:flex-row py-16 lg:py-32 lg:px-32 items-center justify-between gap-10">
        <p className="text-4xl md:text-6xl lg:text-[175px] leading-tight font-medium text-center lg:text-left">
          Let's do <br /> things <br /> together
        </p>

        <div className="w-full lg:w-auto">
          <motion.svg
            width="100%"
            height="auto"
            viewBox="0 0 616 436"
            fill="none"
            whileInView="visible"
            initial="hidden"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:p-0 px-4 py-8"
          >
            <motion.path
              d="M6.5 6.5C28 68.1048 69.5 118.5 97.5 145C175.845 219.148 254.087 258.972 334.657 287.467C396.801 309.446 493.899 331.416 556.881 299.73C598.056 279.016 612 210 609 171C606 132 574 90 527.83 68.1048C508.287 58.837 460.953 58.0742 430.661 68.1048C392.524 80.733 372.557 100.994 339.651 125.137C280.64 168.431 221.194 260.5 200.753 313.944C185.241 354.5 176.875 375 176.875 424.5"
              stroke="white"
              strokeWidth="12"
              strokeLinecap="round"
              variants={pathVariant1}
            />
            <motion.path
              d="M138.966 380C138.966 380 139.65 381.607 141.653 385.418C142.978 387.94 175.095 431.088 177.286 429.802C180.023 428.196 209.568 399.7 217.146 389.321"
              stroke="white"
              strokeWidth="12"
              strokeLinecap="round"
              variants={pathVariant2}
            />
          </motion.svg>

          <p className="text-lg md:text-2xl lg:text-[50px] pt-4 md:pt-8 font-medium text-center leading-normal lg:text-left">
            bramgeboers2@gmail.com
            <br /> <br />
            (+32)04-9464-7893
          </p>
        </div>
      </div>
      <ul className="flex flex-wrap flex-col sm:flex-row justify-between items-center gap-4 text-sm md:text-base p-4 lg:p-10">
        <li className="text-center">
          Bram Geboers - 20 <br /> ©Copyright 2024
        </li>
        <Link href="https://www.linkedin.com/in/bramgeboers/">LinkedIn</Link>
        <li>
          <DateTime />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
