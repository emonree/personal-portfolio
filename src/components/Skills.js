import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <h1 className="skills-header">Some technologies I use</h1>
        <div className="icons-container">
        <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
          <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
