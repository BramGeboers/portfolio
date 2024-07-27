import React from "react";

const ProjectInfo = ({ project }) => {
  return (
    <div className="flex justify-center gap-16 w-[100%] p-20">
      <div className="max-w-[500px] mr-40">
        <h1 className="text-4xl mb-4 font-mori font-semibold text-red-500">
          Project Info
        </h1>
        <p className="text-xl">{project.info}</p>{" "}
      </div>
      <div className="max-w-[300px]">
        <h2 className="text-4xl mb-4 font-mori font-semibold text-blue-500">
          Credits
        </h2>
        <p className="text-xl">{project.credits}</p>{" "}
      </div>
      <div className="max-w-[300px]">
        <h2 className="text-4xl mb-4 font-mori font-semibold text-yellow-500">
          Tech Stack
        </h2>
        <p className="text-xl">{project.tech}</p>{" "}
      </div>
    </div>
  );
};
export default ProjectInfo;
