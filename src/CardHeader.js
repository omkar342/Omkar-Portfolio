import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./CardHeader.module.css";

function CardHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/about">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/education">
              Education
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/skills">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/experience">
              Experience
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default CardHeader;
