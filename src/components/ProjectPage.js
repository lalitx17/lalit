import React from "react";
import Projects from "./Projects";

const ProjectPage = () => {
  return (
    <div className="experience">
      <div className="experience-box-1">
        <img
          className="experience-img"
          src={process.env.PUBLIC_URL + "/images/gear2.png"}
          width="450px"
          height="450px"
          alt="Engineer"
        />
        <h3 className="experience-caption">PROJECTS</h3>
      </div>
      <img
        className="v"
        src={process.env.PUBLIC_URL + "/images/down.png"}
        alt="Engineer"
      />
      <Projects />
    </div>
  );
};

export default ProjectPage;
