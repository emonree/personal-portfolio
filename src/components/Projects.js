import React from "react";
import "./Projects.css";
import PlantNurseryImage from '../assets/plantnursery.png';
import FirstPortfolio from '../assets/firstportfolio.png';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h1>Projects</h1>
          <div className="project-container">
            <div className="plant-nursery-project">
              <a
                className="hvr-float-shadow"
                href="https://sunshine-nursery.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="plant-nursery-img"
                  src={PlantNurseryImage}
                ></img>
              </a>
              <p className="plant-project-info">
                If you love plants like we do, this app showcases the different
                types of plants and provides information on what climate they
                thrive best in, the amount of light and water required, and the
                plant hardiness zone to keep your plants growing. A
                collaboration project with{" "}
                <a
                  className="bailey-link"
                  href="https://github.com/texasmami/plant-nursery-front-end"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Bailey
                </a>
                . An app built with{" "}
                <span className="programming-language">React</span>,{" "}
                <span className="programming-language">Express</span>, and{" "}
                <span className="programming-language">Mongoose</span>.
              </p>
            </div>
            <div className="first-portfolio-project">
              <a
                href="https://clinquant-duckanoo-46dc05.netlify.app/index.html"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="first-portfolio-img"
                  src={FirstPortfolio}
                ></img>
              </a>
              <p>
                My first ever multi-page-app built with HTML and CSS. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
