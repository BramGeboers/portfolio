'use client'
import { motion } from "framer-motion";
import svg1 from "../public/Vector1.svg"

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function App() {
  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw]" >
        <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
        >
        <motion.svg
        
        />

        </motion.svg>

        <motion.path
            d={svg1}
            cx="100"
            cy="100"
            r="80"
            stroke="#ff0055"
            custom={1}
        />
    </div>
  );
}
