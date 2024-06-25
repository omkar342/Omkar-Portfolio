import React from 'react';
import classes from "./Contact.module.css";
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className={classes.contact}>
            <div className={classes.title}>
                <h1>
                    <span className={classes.shadow}>
                        <p>Contact</p>
                    </span>
                    Contact <span className={classes.color}>Me</span>{" "}
                    <span className={classes.icon}>
                        <i class="fas fa-briefcase"></i>
                    </span>
                </h1>
            </div>
            <>
                <ContactForm/>
            </>
        </div>
    );
}

export default Contact;
