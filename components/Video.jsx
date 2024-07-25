"use client";
import React from "react";

const Video = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center mt-[137px] group">
        <h1 className="absolute mix-blend-difference  translate-y-[25px] drop-shadow-xl text-[264px] font-mori leading-[240px] group-hover:opacity-0 transition-all duration-500">
          CASE 01 <br /> CAR4RENT
        </h1>
        <video
          width="1820"
          height="980"
          preload="none"
          autoPlay
          loop
          muted
          className="object-cover object-center h-full max-h-[80vh] w-[90vw]" // Crop video
        >
          <source src="/videos/Media1_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Video;
