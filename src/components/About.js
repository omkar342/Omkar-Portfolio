import React from "react";
import Avatar1 from "../Avatar1";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.about}>
      <div className={classes.title}>
        <h1>
          <span className={classes.shadow}><p>Details</p></span>
          About <span className={classes.color}>Me</span>{" "}
          <span className={classes.icon}>
            <i class="far fa-user-circle"></i>
          </span>
        </h1>
        <Avatar1 />
      </div>
      <div className={classes.info}>
        <div className={classes.intro}>
          <h3>
            Hello, I'm <span className={classes.color}>Omkar,</span>
          </h3>
          <p>Software Developer</p>
          <p>
          I am a pre-final year undergrad student with a major in computer science. I love developing software that can have an impact on the life of people. I am also currently learning Block-Chain & looking forward to exploring Web3.
          </p>
        </div>
        <hr style={{color:"white",opacity:"1"}} />
        <div className={classes.avatar}>
          {/* <Avatar1 /> */}
          <p>
            <span className={classes.color}>Name:</span> Omkar Jadhav
          </p>
          <p>
            <span className={classes.color}>Age:</span> 19
          </p>
          <p>
            <span className={classes.color}>Phone No.:</span> +91 832-973-3453
          </p>
          <p>
            <span className={classes.color}>Email:</span>{" "}
            omkarjadhav095@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
