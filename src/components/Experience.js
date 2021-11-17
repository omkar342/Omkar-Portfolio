import React from "react";
import Avatar1 from "../Avatar1";
import classes from "./Experience.module.css";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className={classes.experience}>
      <div className={classes.title}>
        <h1>
          <span className={classes.shadow}>
            <p>Experience</p>
          </span>
          My <span className={classes.color}>Experience</span>{" "}
          <span className={classes.icon}>
            <i class="fas fa-briefcase"></i>
          </span>
        </h1>
        {/* <Avatar1 /> */}
      </div>
      <div className={classes.card}>
        <ExperienceCard />
      </div>
    </div>
  );
}

export default Experience;
