import React from 'react'
import classes from "./SkillCards.module.css"
import SkillCard from './SkillCard'

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
import dart from "../assets/dart.png"
import blockchain from "../assets/blockchain.png"
import solidity2 from "../assets/solidity2.png"
import solidity from "../assets/solidity.png"
import sql from "../assets/sql.png"
import flutter from "../assets/flutter.png"
import bootstrap from "../assets/bootstrap.png"
import socket from "../assets/socket.png"
import typescript from "../assets/typescript.png"

function SkillCards() {
    return (
        <div className={classes.skill_cards}>
            <h3>Programming Languages</h3>
            <div className={classes.images}>
                {/* <div className={classes.image}>
                    <div className={classes.inner_image}><img src={cpp} alt="" /></div>
                    <p>C++</p>
                </div> */}
                <SkillCard title="C++" image={cpp}/>
                <SkillCard title="Java" image={java}/>
                <SkillCard title="Python" image={python}/>
                <SkillCard title="Javascript" image={javascript}/>
                <SkillCard title="Dart" image={dart}/>
                <SkillCard title="Typescript" image={typescript}/>
            </div>
            <h3>Frontend Development</h3>
            <div className={classes.images}>
                <SkillCard title="HTML" image={html}/>
                <SkillCard title="CSS" image={css}/>
                <SkillCard title="React.js" image={react}/>
                <SkillCard title="Material UI" image={materialui}/>
                <SkillCard title="Bootstrap" image={bootstrap}/>
            </div>
            <h3>Backend Development</h3>
            <div className={classes.images}>
                <SkillCard title="Node.Js" image={nodejs}/>
                <SkillCard title="Express.js" image={express1}/>
                <SkillCard title="Redux" image={redux}/>
                <SkillCard title="Socket.IO" image={socket}/>
            </div>
            <h3>Database</h3>
            <div className={classes.images}>
                <SkillCard title="MySql" image={mysql}/>
                <SkillCard title="MongoDB" image={mongodb}/>
            </div>
            <h3>Mobile Developement</h3>
            <div className={classes.images}>
                <SkillCard title="Flutter" image={flutter}/>
            </div>
            <h3>Blockchain Technology</h3>
            <div className={classes.images}>
                <SkillCard title="Blockchain" title1="Fundamentals" image={blockchain}/>
                <SkillCard title="Solidity" image={solidity}/>
            </div>
        </div>
    )
}

export default SkillCards
