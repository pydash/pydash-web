import React from "react";
import SpotlightCard from "./custom/SpotlightCard";
import ShinyText from "./custom/ShinyText";
import "../styles/Projects.css";
import { HiFire, HiCode, HiDeviceMobile } from "react-icons/hi";

const projectList = [
  {
    node: <HiFire />,
    title: "Renta",
    description:
      "A platform that lets people share and rent assets easily, helping users access items without full ownership.",
  },
  {
    node: <HiCode />,
    title: "Quote Generator",
    description:
      "A simple tool where it displays random quotes with each click, designed to inspire and motivate users instantly.",
  },
  {
    node: <HiDeviceMobile />,
    title: "Wititiw",
    description:
      "A fun lightweight app where users can post short thoughts or messages, creating casual and engaging interactions.",
  },
];

function Projects() {
  return (
    <>
      <div id="projects" className="projects-container">
        <ShinyText
          text="Builds🛠️"
          disabled={false}
          speed={3}
          className="projects-title"
        />
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <SpotlightCard key={index} spotlightColor="rgba(82, 12, 235, 0.64)">
              <div className="project-content">
                <div className="project-icon">{project.node}</div>
                <ShinyText
                  text={project.title}
                  disabled={false}
                  speed={3}
                  className="project-title"
                />
                <p className="project-description">{project.description}</p>
                <button className="view-project-btn">
                  <a className="view-project-link" href="#">
                    View project
                  </a>
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
