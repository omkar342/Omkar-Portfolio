import React from 'react'
import classes from "./ProjectsNav.module.css";
import { NavLink, Link } from "react-router-dom";

function ProjectsNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/projects/web">
              Websites
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/projects/mobile">
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/projects/blockchain">
              Blockchain
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default ProjectsNav