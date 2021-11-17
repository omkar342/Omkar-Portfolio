import React from "react";
import Avatar1 from "../Avatar1";
import classes from "./Education.module.css";
import CollegeCard from "./CollegeCard";

function Education() {
  return (
    <div className={classes.education}>
      <div className={classes.title}>
        <h1>
          <span className={classes.shadow}>
            <p>Education</p>
          </span>
          My <span className={classes.color}>Education</span>{" "}
          <span className={classes.icon}>
            <i class="fas fa-graduation-cap"></i>
          </span>
        </h1>
        {/* <Avatar1 /> */}
      </div>
      <div className={classes.card}>
      <CollegeCard />
      </div>
    </div>
  );
}

export default Education;
