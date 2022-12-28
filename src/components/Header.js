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



const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-navigation">
      <Link
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
        
        <h1>Hello! I'm Emon!</h1>
  
        <h3>I'm a CrossFit enthusiast and an avid coffee drinker.</h3>
        <h1>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h1>
      </div>
    </div>
  );
};

export default Header;
