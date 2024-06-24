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
          <p className={classes.intro_header}>Software Developer</p>
          <p className={classes.intro_para}>
            I love developing software that can have an impact on the life of people.
            I am also currently learning fundamentals of Blockchain & looking forward to build Decentralized Apps to implement web3.
          </p>
        </div>
        <hr style={{ color: "white", opacity: "1" }} />
        <div className={classes.avatar}>
          {/* <Avatar1 /> */}
          <p>
            <span className={classes.color}>Name:</span> Omkar Jadhav
          </p>
          <p>
            <span className={classes.color}>Age:</span> 22
          </p>
          <p>
            <span className={classes.color}>Phone No.:</span> +91 8329733453
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
