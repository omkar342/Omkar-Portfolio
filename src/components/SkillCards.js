import React from 'react'
import classes from "./SkillCards.module.css"
import cpp from "../assets/c++.png"
import java from "../assets/java.png"
import python from "../assets/python.png"
import javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import nodejs from "../assets/nodejs.png"
import express1 from "../assets/express1.png"
import react from "../assets/react.png"
import redux from "../assets/redux.png"
import materialui from "../assets/materialui.png"
import mysql from "../assets/mysql.png"
import mongodb from "../assets/mongodb.png"
import sql from "../assets/sql.png"
import flutter from "../assets/flutter.png"
import bootstrap from "../assets/bootstrap.png"

function SkillCards() {
    return (
        <div className={classes.skill_cards}>
            <h3>Programming Languages</h3>
            <div className={classes.images}>
                <img src={cpp} alt="" />
                <img src={java} alt="" />
                <img src={python} alt="" />
                <img src={javascript} alt="" />
            </div>
            <h3>Website Development</h3>
            <div className={classes.images}>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={nodejs} alt="" />
                <img src={express1} alt="" />
                <img src={react} alt="" />
                <img src={redux} alt="" />
                <img src={materialui} alt="" />
            </div>
            <h3>Database</h3>
            <div className={classes.images}>
                <img src={mysql} alt="" />
                <img src={mongodb} alt="" />
                <img src={sql} alt="" />
            </div>
            <h3>Familiar With</h3>
            <div className={classes.images}>
                <img src={flutter} alt="" />
                <img src={bootstrap} alt="" />
            </div>
        </div>
    )
}

export default SkillCards
