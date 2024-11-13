import React from "react";
import Image from "next/image";

const Highlights = ({ project }) => {
  return (
    <div className="py-20 max-w-[1400px] mx-auto">
      <div className="pb-8">
        <h1 className="text-6xl pb-2 font-mori font-semibold text-green-500">
          {project.highlight1}
        </h1>
        <Image
          src={project.image1}
          alt="Highlights1"
          layout="responsive"
          width={1908}
          height={951}
          className="pb-8"
        />
      </div>
      <div className="flex gap-8 justify-between">
        <div className="max-w-[60%]">
          <h1 className="text-6xl pb-2 font-mori font-semibold text-blue-500">
            {project.highlight2}
          </h1>
          <Image
            src={project.image2}
            alt="Highlights2"
            layout="responsive"
            width={1908}
            height={951}
            className="pb-8"
          />
        </div>
        <div className="max-w-[30%]">
          <h1 className="text-6xl pb-2 font-mori font-semibold text-red-500">
            {project.highlight3}
          </h1>
          <Image
            src={project.image3}
            alt="Highlights3"
            layout="responsive"
            width={1908}
            height={951}
            className="pb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
