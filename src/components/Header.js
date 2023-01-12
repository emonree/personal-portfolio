import React from "react";
import { Link } from "react-scroll";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";
// import Image from "../assets/IMG_4536.jpeg";

const Header = () => {
  const handleMenuClick = (target) => {
    document.getElementById(target).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="header" id="header">
      <div className="header-navigation">
        <div className="desktop-nav">
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
            <a
              href="www.google.com" // fake link. need to add resume link
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="resume">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38.5"
                  height="38"
                  fill="currentColor"
                  className="bi bi-person-workspace"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                </svg>
              </span>
              {/* <i className="resume" class="bi bi-person-workspace"></i> */}
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
        <div className="mobile-nav">
          <section className="top-nav">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle">
              <div className="menu-button"></div>
            </label>
            <ul className="menu">
              <li>
                <span
                  onClick={() => {
                    handleMenuClick("about-me");
                  }}
                >
                  About Me
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    handleMenuClick("skills");
                  }}
                >
                  Toolbox
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    handleMenuClick("projects");
                  }}
                >
                  Projects
                </span>
              </li>
              <li className="li-social-icons">
                <div className="social-icons">
                  <li>
                    <a
                      href="https://github.com/emonree"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        width="40px"
                        alt="github"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/emonli/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                        width="40px"
                        alt="linkedin"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="www.google.com" // fake link. need to add resume link
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="resume">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38.5"
                          height="38"
                          fill="currentColor"
                          className="bi bi-person-workspace"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                        </svg>
                      </span>
                    </a>
                  </li>
                </div>
              </li>
            </ul>
          </section>
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
                  <p className="element">daydreamer.</p>
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
