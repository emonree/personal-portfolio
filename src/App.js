import React, { useState } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css'

const App = () => {
  return (
    <>

      <Header />
      <AboutMe />
      <Skills />
      <Projects />

    </>
  );
};

export default App;
