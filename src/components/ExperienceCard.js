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
      company: "Shopout",
      post: "Full-Stack Intern",
      time: "Mar 2022 - May 2022",
    },
    {
      company: "Vebsigns Technology",
      post: "Full Stack Intern",
      time: "DEC 2021 - JAN 2022",
    },
    {
      company: "The Spark's Foundation",
      post: "Web Dev Intern",
      time: "SEP 2021 - OCT 2021",
    },
    {
      company: "Internshala",
      post: "Internshala Student Partner-19",
      time: "Aug 2020 - SEP 2020",
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
