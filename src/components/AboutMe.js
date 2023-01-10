import React from "react";
import "./AboutMe.css";
import Image from "../assets/IMG_4536.jpeg";

const AboutMe = () => {
  return (
    <div className="about-me" id="about-me">
      <div className="container">
        <div className="img-content">
          <img className="img" src={Image} alt="profile"/>
        </div>
        <div className="content">
          <h1 className="title-about-me">About</h1>

          <p>
            I'm a full stack software developer with a background in healthcare as a cardiology medical assistant and customer service. I'm people and detail oriented and passionate about being able to bring value to the products that I work on. My previous work experience has taught me to how to adapt to people with different needs and work styles and prepare for emergency situations with strict time management.

            <h1 className="title-about-me">Backstory</h1>
          
            I used to work as a medical assistant and had developed a big passion for helping others. Knowing I made a difference in someone's life or even their day made me feel like I was doing something right. As time went by, I realized I wanted more out of life and my career; I wanted a challenge and something to pick my brains. I had always been interested in coding, and with the encouragement and support from family and friends, I decided to take the leap because it's now or never, right?
            <br />
            <br />
            Enrolling in General Assembly's Software Engineering Immersive Program solidified my decision. It was challenging, yet rewarding at the same time. I'm still passionate about the healthcare industry and helping people in need - and I can continue doing that through technology. Technology is evolving and changing everyday and I want to be apart of it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
