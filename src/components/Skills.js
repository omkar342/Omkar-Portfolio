import React from "react";
import SkillCards from "./SkillCards";
import classes from "./Skills.module.css";

function Skills() {
  return (
    <div className={classes.projects}>
      <div className={classes.title}>
        <h1>
          <span className={classes.shadow}>
            <p>Skills</p>
          </span>
          My <span className={classes.color}>Skills</span>{" "}
          <span className={classes.icon}>
            <i class="fas fa-desktop"></i>
          </span>
        </h1>
        {/* <Avatar1 /> */}
      </div>
      <div>
          <SkillCards/>
      </div>
    </div>
  );
}

export default Skills;
