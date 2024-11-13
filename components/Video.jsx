"use client";
import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";

const Video = ({ project, url }) => {
  return (
    <>
      <div className="flex mx-auto items-center justify-center h-[750px] w-[1333px] mt-[137px] w group relative">
        <h1 className="absolute mix-blend-difference  translate-y-[25px] drop-shadow-xl text-[264px] font-mori leading-[240px] group-hover:opacity-0 transition-all duration-500 max-w-[80%]">
          CASE {project.nr} <br /> {project.title}
        </h1>

        {project.live && (
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-50 bottom-6 right-10 text-3xl mix-blend-difference flex items-center"
          >
            See Live <ImArrowUpRight2 className="ml-2" />
          </Link>
        )}

        {project.source && (
          <Link
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-50 bottom-6 right-10 text-3xl mix-blend-difference flex items-center"
          >
            Source Code <ImArrowUpRight2 className="ml-2" />
          </Link>
        )}

        <video
          width="1820"
          height="980"
          preload="none"
          autoPlay
          loop
          muted
          className="object-contain h-full max-h-[750px]" // Crop video
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Video;
