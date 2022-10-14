import React from "react";
import Avatar1 from "../Avatar1";
import classes from "./Projects.module.css";
import ProjectCardsWebsites from "./ProjectCardsWebsites";
import ProjectCardsMobiles from "./ProjectCardsMobiles";
import ProjectCardsBlockchain from "./ProjectCardsBlockchain";
import { Route , Redirect } from "react-router-dom";
import ProjectsNav from "./ProjectsNav";

function Projects() {
  return (
    <div className={classes.projects}>
      <div className={classes.title}>
        <h1>
          <span className={classes.shadow}>
            <p>Work</p>
          </span>
          My <span className={classes.color}>Projects</span>{" "}
          <span className={classes.icon}>
            <i class="fas fa-desktop"></i>
          </span>
        </h1>
        {/* <Avatar1 /> */}
      </div>
      <ProjectsNav />
      <div className={classes.card}>
        <Route path="/projects">
          <Redirect to="/projects/web"/>
        </Route>
        <Route path="/projects/web">
          <ProjectCardsWebsites />
        </Route>
        <Route path="/projects/mobile">
          <ProjectCardsMobiles />
        </Route>
        <Route path="/projects/blockchain">
          <ProjectCardsBlockchain/>
        </Route>
      </div>
    </div>
  );
}

export default Projects;
