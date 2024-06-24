import React from "react";
import Avatar1 from "./Avatar1";
import classes from "./Home.module.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.avatar}>
        <Avatar1 />
      </div>
      <div className={classes.intro}>
        <h1>Welcome 🙏!</h1>
        <h2>
          I'm{" "}
          <span className={classes.name}>
            <a href="https://www.linkedin.com/in/omkar-jadhav-7809b7196/">
              Omkar
            </a>
          </span>
        </h2>
        <div className={classes.para}>
          <p>
            Experienced MERN stack developer with 2 years of hands-on expertise in building scalable web applications using MongoDB, Express.js, ReactJs, NextJs, and Node.js.
          </p>
          <p>
            Dedicated to writing clean, maintainable code following best practices, contributing to scalable and efficient software solutions.
          </p>
        </div>
        <div className={classes.buttons}>
          <div className={classes.button}>
            <a href="#card">
              <button>
                <p>
                  About Me{""}
                  <span className={classes.icon}>
                    <i class="fas fa-angle-right"></i>
                  </span>
                </p>
              </button>
            </a>
          </div>
          <div className={classes.button}>
            <a href="https://tinyurl.com/ypk63a6c" target="_blank">
              <button>
                <p>
                  Resume{""}
                  <span className={classes.icon}>
                    <i class="far fa-file"></i>
                  </span>
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
