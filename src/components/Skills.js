import React from "react";
import "./Skills.css";
import { RiReactjsLine } from "react-icons/ri";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoPython,
  IoLogoNodejs,
} from "react-icons/io";
import { DiDjango } from "react-icons/di";
import { SiMongodb, SiPostgresql } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <h1 className="skills-header">Some technologies I use</h1>
        <div className="icons-container">
          <RiReactjsLine size="8em" className="icons" />
          <IoLogoHtml5 size="7.5em" className="icons" />
          <IoLogoCss3 size="7.5rem" className="icons" />
          <IoLogoJavascript size="8rem" className="icons" />
          <IoLogoPython size="8rem" className="icons" />
          <IoLogoNodejs size="7.5rem" className="icons" />
          <DiDjango size="8rem" className="icons" />
          <SiMongodb size="7.5rem" className="icons" />
          <SiPostgresql size="7.5rem" className="icons" />
          <VscCode size="8rem" className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
