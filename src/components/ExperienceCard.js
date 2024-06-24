import React from "react";
import classes from "./ExperienceCard.module.css";
import { Timeline } from "primereact/timeline";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ExperienceCard() {
  const events = [
    {
      company: "Civil Guruji",
      post: "Full Stack Developer",
      time: "AUG 2023 - Present",
    },
    {
      company: "Cerence Inc.",
      post: "Software Engineer Intern",
      time: "JAN 2023 - JULY 2023",
    },
    {
      company: "Shopout",
      post: "Full-Stack Intern",
      time: "Mar 2022 - May 2022",
    },
    {
      company: "Vebsigns Technology",
      post: "Full Stack Intern",
      time: "DEC 2021 - FEB 2022",
    },
  ];
  return (
    <div className={classes.timeline}>
      <Timeline
        style={{padding:"0px"}}
        align="alternate"
        value={events}
        marker={(item) => <i class="fas fa-briefcase"></i>}
        content={(item) => (
          <div className={classes.card}>
            <h4>{item.company}</h4>
            <h6>{item.post}</h6>
            <p>{item.time}</p>
          </div>
        )}
      />
    </div>
  );
}

export default ExperienceCard;
