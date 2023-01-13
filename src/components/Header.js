import React from "react";
import { Link } from "react-scroll";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";
import Resume from "../assets/Resume Jan 2023.pdf";

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
            <a href={Resume} target="_blank" rel="noreferrer noopener">
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
            <a href="mailto: emonli.328@gmail.com">
              <span className="contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38.5"
                  height="38"
                  fill="currentColor"
                  class="bi bi-envelope-at"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
              </span>
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
              duration={500}
              isDynamic={true}
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
                    <a href={Resume} target="_blank" rel="noreferrer noopener">
                      <span className="resume">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38.5"
                          height="38"
                          fill="currentColor"
                          class="bi bi-person-workspace resume-icon"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto: emonli.328@gmail.com">
                      <span className="contact">
                        <svg
                          className="contact-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="38.5"
                          height="38"
                          fill="currentColor"
                          class="bi bi-envelope-at contact-icon"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                          <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
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
