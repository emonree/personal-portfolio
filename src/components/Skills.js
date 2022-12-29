import React from 'react'
import './Skills.css'
import { RiReactjsLine } from 'react-icons/ri'
import { GrHtml5 } from 'react-icons/gr'
import { IoLogoCss3, IoLogoJavascript, IoLogoPython, IoLogoNodejs } from 'react-icons/io'
import { DiJqueryLogo, DiDjango } from 'react-icons/di'
import { SiHeroku, SiMongodb, SiPostgresql } from 'react-icons/si'

const Skills = () => {
  return (
    <div className="skills" id="skills">
        <div className="container">
          <RiReactjsLine size="8em" className="icons"/>
          <GrHtml5 size="7.5em" className="icons"/>
          <IoLogoCss3 size="7.5rem" className="icons"/>
          <IoLogoJavascript size="8rem" className="icons"/>
          <IoLogoPython size="8rem" className="icons"/>
          <DiJqueryLogo size="8rem" className="icons"/>
          <IoLogoNodejs size="7.5rem" className="icons"/>
          <SiHeroku size="7rem" className="icons"/>
          <DiDjango size="8rem" className="icons"/>
          <SiMongodb size="7.5rem" className="icons"/>
          <SiPostgresql size="7.5rem" className="icons"/>
        </div>
      </div>
  )
}

export default Skills;