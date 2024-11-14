import React from "react";
import Image from "next/image";

const Highlights = ({ project }) => {
  return (
    <div className="py-10 sm:py-16 lg:py-20 max-w-[95%] lg:max-w-[1400px] mx-auto">
      <div className="pb-6 sm:pb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl px-4 pb-2 font-mori font-semibold text-green-500">
          {project.highlight1}
        </h1>
        <Image
          src={project.image1}
          alt="Highlights1"
          layout="responsive"
          width={1908}
          height={951}
          className="p-4 sm:pb-6"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between">
        <div className="w-full lg:max-w-[60%]">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl px-4 pb-2 font-mori font-semibold text-blue-500">
            {project.highlight2}
          </h1>
          <Image
            src={project.image2}
            alt="Highlights2"
            layout="responsive"
            width={1908}
            height={951}
            className="p-4 sm:pb-6"
          />
        </div>
        <div className="w-full lg:max-w-[35%]">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl px-4 pb-2 font-mori font-semibold text-red-500">
            {project.highlight3}
          </h1>
          <Image
            src={project.image3}
            alt="Highlights3"
            layout="responsive"
            width={1908}
            height={951}
            className="p-4 sm:pb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
