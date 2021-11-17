import React from "react";
import classes from "./CollegeCard.module.css";
import { Timeline } from "primereact/timeline";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function CollegeCard() {
  const events = [
    {
      college: "Zeal College of Engineering & Research Center",
      year: "2019-2023",
      degree: "BE Computer Science",
      color: "#673AB7",
    },
    {
      college: "S.P. College",
      year: "2017-2019",
      degree: "Junior College",
      color: "#9C27B0",
    },
  ];
  return (
    <div className={classes.timeline}>
      <Timeline
        align="alternate"
        value={events}
        marker={(item) => <i class="fas fa-university"></i>}
        content={(item) => (
          <div className={classes.card}>
            <h4>{item.college}</h4>
            <h6>{item.degree}</h6>
            <p>{item.year}</p>
          </div>
        )}
      />
    </div>
  );
}

export default CollegeCard;
