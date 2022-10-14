import React from "react";
import classes from "./Social.module.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from "mdb-react-ui-kit";

function Social() {
  return (
    <div className={classes.social}>
      <a
        class="btn btn-primary btn-lg btn-floating"
        href="https://www.instagram.com/omkar.342/"
        role="button"
        target="_blank"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <a
        class="btn btn-primary btn-lg btn-floating"
        href="https://www.linkedin.com/in/omkar-jadhav-7809b7196/"
        role="button"
        target="_blank"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a
        class="btn btn-primary btn-lg btn-floating"
        href="https://twitter.com/anthropic_o3"
        role="button"
        target="_blank"
      >
        <i class="fab fa-twitter"></i>
      </a>
      <a
        class="btn btn-primary btn-lg btn-floating"
        href="https://www.github.com/omkar342"
        role="button"
        target="_blank"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        class="btn btn-primary btn-lg btn-floating"
        href="https://dev.to/omkar342"
        role="button"
        target="_blank"
      >
        <i class="fab fa-dev"></i>
      </a>
    </div>
  );
}

export default Social;
