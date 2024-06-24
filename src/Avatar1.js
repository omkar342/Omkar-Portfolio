import React from "react";
import omkar from "./assets/omkar.jpg";
import classes from "./Avatar1.module.css";

function Avatar1() {
  return (
    <div>
      <div className={classes.avatar}>
        <img src={omkar} alt="Omkar" />
      </div>
    </div>
  );
}

export default Avatar1;
