import React from "react";

const ProjectInfo = ({ project }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 w-full p-8 sm:p-12 lg:p-20">
      <div className="max-w-full lg:max-w-[500px] mb-8 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-mori font-semibold text-red-500">
          Project Info
        </h1>
        <p className="text-base sm:text-lg lg:text-xl">{project.info}</p>
      </div>
      <div className="max-w-full lg:max-w-[300px] mb-8 lg:mb-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-mori font-semibold text-blue-500">
          Credits
        </h2>
        <p className="text-base sm:text-lg lg:text-xl">{project.credits}</p>
      </div>
      <div className="max-w-full lg:max-w-[300px]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-mori font-semibold text-yellow-500">
          Tech Stack
        </h2>
        <p className="text-base sm:text-lg lg:text-xl">{project.tech}</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
