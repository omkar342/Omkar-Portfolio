import React from "react";
import Avatar1 from "../Avatar1";
import classes from "./Projects.module.css";
import ProjectCards from "./ProjectCards";

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
      <div className={classes.card}><ProjectCards /></div>
    </div>
  );
}

export default Projects;
