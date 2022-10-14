import React from "react";
import classes from "./SkillCard.module.css";

function SkillCard(props) {
  return (
    <div className={classes.image}>
      <div className={classes.inner_image}>
        <img src={props.image} alt="" />
      </div>
      <p>{props.title}</p>
      <div className={classes.fundamentals}>
        {props.title1 && <p>{props.title1}</p>}
      </div>
    </div>
  );
}

export default SkillCard;
