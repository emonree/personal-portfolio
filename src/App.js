// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";

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
