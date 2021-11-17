import React from 'react'
import classes from "./Navbar.module.css";
import Social from './Social';

function Navbar() {
    return (
        <div className={classes.navbar}>
            <a href="https://www.github.com/omkar342/"><h1>{"<"} Omkar {"/>"}</h1></a>
            {/* <a href="#" class="glitch" data-glitch="Explore">Explore</a> */}
            <div>
                <Social/>
            </div>
        </div>
    )
}

export default Navbar
