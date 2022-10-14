import React from "react";
import Avatar1 from "./Avatar1";
import classes from "./Home.module.css";
import { Button } from "@mui/material";
import resume from "./assets/Omkar_Jadhav_Resume.pdf";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Typing from "react-typing-animation";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.avatar}>
        <Avatar1 />
      </div>
      <div className={classes.intro}>
        <h1>HEY THERE 👋!</h1>
        <h2>
          I'm{" "}
          <span className={classes.name}>
            <a href="https://www.linkedin.com/in/omkar-jadhav-7809b7196/">
              Omkar Jadhav
            </a>
          </span>
        </h2>
        {/* <p>
          I develop Full Stack Applications that has great impact on the life of
          user & make their life easy.
        </p> */}
        <div className={classes.para}>
          <p>
            I'm a Full Stack Developer who is focused on developing software
            products that make the life of users easy.
          </p>
          <p>
            I can build Browser Extension, Android Apps, Web Apps & Websites.
          </p>
          <p>
            I am passionate about Web Development, Open Source & Blockchain.
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
            <a href="https://drive.google.com/file/d/1n0y2CUDm_TexR4pm2YIPv4Mikz24WK2Y/view" target="_blank">
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
