import React, { useState } from "react";
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <AboutMe />

      <div className="skills">
        <div className="container">

        <h3>React</h3>
        <h3>HTML 5</h3>
        <h3>CSS</h3>
        <h3>JavaScript</h3>
        <h3>Python</h3>
        <h3>jQuery</h3>
        <h3>Express</h3>
        <h3>Heroku</h3>
        <h3>Django</h3>
        <h3>Mongo DB</h3>
        <h3>SQL</h3>
        <h3>Node.js</h3>
        </div>
      </div>
    

    </>
  );
};

export default App;
