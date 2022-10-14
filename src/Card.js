import { Route , Redirect} from "react-router-dom";
// import { Routes } from 'react-router-dom';
import React from "react";
import CardHeader from "./CardHeader";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import classes from "./Card.module.css";
import Experience from "./components/Experience";

function Card() {
  return (
    <div className={classes.card} id="card">
      <CardHeader />
      <hr />
      <Route exact path="/">
          <Redirect to="/about"/>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/education">
        <Education />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/experience">
        <Experience />
      </Route>
    </div>
  );
}

export default Card;
