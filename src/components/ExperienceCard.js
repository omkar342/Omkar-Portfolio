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
      company: "Internshala",
      post: "Internshala Student Partner-19",
      time: "Aug 2020 - SEP 2020",
      color: "#673AB7",
    },
    {
      company: "The Spark's Foundation",
      post: "Web Dev Intern",
      time: "SEP 2020 - OCT 2020",
      color: "#9C27B0",
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
