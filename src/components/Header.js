import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
// import Image from "../assets/IMG_4536.jpeg";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-navigation">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/emonli/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              width="40px"
              alt="github"
            />
          </a>

          <a
            href="https://github.com/emonree"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
              width="40px"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="header-links">
          <Link
            className="hvr-underline-reveal"
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            hashSpy={true}
            // offset={50}
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
            className="hvr-underline-reveal"
            activeClass="active"
            to="about-me"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            About
          </Link>

          <Link
            className="hvr-underline-reveal"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            Skills
          </Link>

          <Link
            className="hvr-underline-reveal"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="">
          <div className="">
            <h1 className="fade-in-text">
              Hello! <span>I'm Emon</span>! Nice to meet you{" "}
              <span className="smile-face blinking"> :] </span>
            </h1>
            <h2 className="fade-in-text-2">
              {"<"} I'm a <span>Full Stack Web Developer</span> {"/>"}
            </h2>
            <div className="carousel-container">
              <span>Aside from being a developer, I am also a&nbsp;</span>
              <div className="header-carousel">
                <div className="text-carousel">
                  <p className="element">CrossFit enthusiast.</p>
                  <p className="element">coffee con-non-seur.</p>
                  <p className="element">big daydreamer.</p>
                  <p className="element">planner gal.</p>
                  <p className="element">CrossFit enthusiast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Header;
