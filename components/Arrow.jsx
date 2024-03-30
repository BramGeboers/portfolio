"use client"
import React from 'react'
import { motion } from "framer-motion";

const Arrow = () => {

  const pathVariant1 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      pathOffset: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0.80,
      transition: { 
        duration: 4,
        delay: .5,
        ease: "easeInOut",
      }
    }
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
        delay: 2,
        ease: "easeInOut",
      }
    }
  };
  
  return (
    <motion.svg
      width={1600}
      height={648}
      fill="none"
      initial="hidden"
      animate="visible"
    >
      <g>
        <motion.path
          d="M14 14H155.5C210.728 14 255.5 58.7715 255.5 114V126C255.5 181.228 300.272 226 355.5 226H1354C1409.23 226 1454 270.772 1454 326V470"
          stroke="#21A500"
          strokeWidth={28} // Set stroke width to 28
          strokeLinecap="round" // Set stroke-linecap to round
          strokeLinejoin="round" // Set stroke-linejoin to round
          variants={pathVariant1}
        />
        <motion.path
          d="M1538 414L1453.5 492L1369 414"
          stroke="#21A500"
          strokeWidth={28} // Set stroke width to 28
          strokeLinecap="round" // Set stroke-linecap to round
          strokeLinejoin="round" // Set stroke-linejoin to round
          variants={pathVariant2}
        />
      </g>
    </motion.svg>
  );
}

export default Arrow;
