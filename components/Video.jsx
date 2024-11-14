"use client";
import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";

const Video = ({ project, url }) => {
  return (
    <>
      <div className="flex mx-auto items-center justify-center h-[50vh] w-[90vw] mt-10 sm:mt-20 md:h-[60vh] md:w-[80vw] lg:h-[750px] lg:w-[1333px] group relative">
        <h1 className="absolute mix-blend-difference translate-y-[5%] drop-shadow-xl text-[10vw] font-mori leading-tight group-hover:opacity-0 transition-all duration-500 max-w-[90%] md:text-[8vw] lg:text-[264px] lg:leading-[240px]">
          CASE {project.nr} <br /> {project.title}
        </h1>

        {project.live && (
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-50 bottom-4 right-6 text-lg mix-blend-difference flex items-center md:text-2xl lg:bottom-6 lg:right-10 lg:text-3xl"
          >
            See Live <ImArrowUpRight2 className="ml-2" />
          </Link>
        )}

        {project.source && (
          <Link
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-50 bottom-4 left-6 text-lg mix-blend-difference flex items-center md:text-2xl lg:bottom-6 lg:right-10 lg:text-3xl"
          >
            Source Code <ImArrowUpRight2 className="ml-2" />
          </Link>
        )}

        <video
          width="100%"
          height="auto"
          preload="none"
          autoPlay
          loop
          muted
          className="object-contain max-h-[50vh] md:max-h-[60vh] lg:max-h-[750px]"
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Video;
