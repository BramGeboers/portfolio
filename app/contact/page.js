// ParentComponent.js
"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { useState } from "react";
import Contact from "@/components/Contact";

const ParentComponent = () => {
  const path = "/contact";

  const [isHovering, setIsHovering] = useState(false);

  const handleHeroHoverEnter = () => {
    setIsHovering(true);
  };

  const handleHeroHoverLeave = () => {
    setIsHovering(false);
  };

  return (
    <main className="bg-black text-white">
      <CustomCursor isHovering={isHovering} />
      <Navbar
        pathname={path}
        onHoverEnter={handleHeroHoverEnter}
        onHoverLeave={handleHeroHoverLeave}
      />
      <Contact />
      <Footer />
    </main>
  );
};

export default ParentComponent;
