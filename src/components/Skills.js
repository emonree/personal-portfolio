import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <h1 className="skills-header">Some technologies I use</h1>
        <div className="icons-container">
          <div className="hvr-float-shadow">
            <img
              className="icons"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <h3 className="skills-name">React</h3>
          </div>
          <div className="hvr-float-shadow">
            <img
              className="icons"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <h3 className="skills-name">HTML5</h3>
          </div>

          <div className="hvr-float-shadow">
            <img
              className="icons"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
            <h3 className="skills-name">CSS3</h3>
          </div>
          <div className="hvr-float-shadow">
            <img
              className="icons"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <h3 className="skills-name">JavaScript</h3>
          </div>
          <div className="hvr-float-shadow">
            <img
              className="icons"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            />
            <h3 className="skills-name">Python</h3>
          </div>
          <div className="hvr-float-shadow">
            <img
              className="icons"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <h3 className="skills-name">Node.js</h3>
          </div>
          <div className="hvr-float-shadow">
            <img
              className="icons"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
            />
            <h3 className="skills-name">Django</h3>
          </div>
          <div className="hvr-float-shadow">
            <img
              className="icons"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            />
            <h3 className="skills-name">Mongo DB</h3>
          </div>
          <div className="hvr-float-shadow">
            <img
              className="icons"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            />
            <h3 className="skills-name">PostgreSQL</h3>
          </div>
          <div className="hvr-float-shadow">
            <img
              className="icons"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            />
            <h3 className="skills-name">VS Code</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
