import React, { useState, useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "./Header.css";
// import Image from "../assets/IMG_4536.jpeg";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-navigation">
      <Link
          className="hvr-underline-from-left "
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          // delay={1000}
          isDynamic={true}
          // onSetActive={this.handleSetActive}
          // onSetInactive={this.handleSetInactive}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          Home
        </Link>
        <Link
          className="hvr-underline-from-left "
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          // delay={1000}
          isDynamic={true}
          // onSetActive={this.handleSetActive}
          // onSetInactive={this.handleSetInactive}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          About Me
        </Link>

        <Link
          className="hvr-underline-from-left "
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          // delay={1000}
          isDynamic={true}
          // onSetActive={this.handleSetActive}
          // onSetInactive={this.handleSetInactive}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          Skills
        </Link>

        <Link
          className="hvr-underline-from-left"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          // delay={1000}
          isDynamic={true}
          // onSetActive={this.handleSetActive}
          // onSetInactive={this.handleSetInactive}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          Projects
        </Link>
      </div>
      <div className="container">
        <div className="">
          <div className="">
            <h1 className="fade-in-text"
            >Hello! I'm Emon!</h1>
            <h2>
              {"< Full Stack Web Developer />"}
            </h2>
            <h3 /*  className="header" */>
              {" "}
              In progress: Embarking on my next journey as a software developer{" "}
            </h3>
          </div>
        </div>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Header;
