"use client";
import React from "react";

import DateTime from "@/components/DateTime";
import { motion } from "framer-motion";

const Footer = () => {
  const pathVariant1 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      pathOffset: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 4,
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
        duration: 2,
        delay: 4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row py-32 px-32 items-center justify-between">
        <p className="text-[175px] leading-none font-medium">
          Let's do <br /> things <br /> together
        </p>

        <div>
          <motion.svg
            width={616}
            height={436}
            fill="none"
            animate="visible"
            initial="hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M6.5 6.5C28 68.1048 69.5 118.5 97.5 145C175.845 219.148 254.087 258.972 334.657 287.467C396.801 309.446 493.899 331.416 556.881 299.73C598.056 279.016 612 210 609 171C606 132 574 90 527.83 68.1048C508.287 58.837 460.953 58.0742 430.661 68.1048C392.524 80.733 372.557 100.994 339.651 125.137C280.64 168.431 221.194 260.5 200.753 313.944C185.241 354.5 176.875 375 176.875 424.5"
              stroke="white"
              stroke-width="12"
              stroke-linecap="round"
              variants={pathVariant1}
            />
            <motion.path
              d="M138.966 380C138.966 380 139.65 381.607 141.653 385.418C142.978 387.94 175.095 431.088 177.286 429.802C180.023 428.196 209.568 399.7 217.146 389.321"
              stroke="white"
              stroke-width="12"
              stroke-linecap="round"
              variants={pathVariant2}
            />
          </motion.svg>

          <p className="text-[50px] pt-8 font-medium">
            bramgeboers2@gmail.com
            <br />
            +32)04-9464-7893
          </p>
        </div>
      </div>
      <ul className="flex flex-row justify-between p-10 items-center">
        <li>
          Bram Geboers - 20 <br /> ©Copyright 2024
        </li>
        <li>LinkedInn</li>
        <li>Facebook</li>
        <li>
          {" "}
          <DateTime />{" "}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
