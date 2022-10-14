import React from "react";
import classes from "./ProjectCardsWebsites.module.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import dapp from "../assets/dapp.png";

function ProjectCardsWebsites() {
  const events = [
    {
      name: "DAPP Token Farm",
      description: "DAPP Token Farm is decentralized app which has smart contract written using Solidity, that allows you to stake your Bitcoin to earn DAPP tokens and interest on Bitcoin.",
      view: "https://github.com/dappuniversity/defi_tutorial",
      code: "https://github.com/dappuniversity/defi_tutorial",
      image: dapp,
    },
  ];

  const Background =
    "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";

  return (
    <div className={classes.project_cards}>
      {events.map((project) => (
        <div
          style={{ backgroundImage: `url(${project.code})` }}
          className={classes.project_card}
        >
          <div className={classes.image}>
            <img src={project.image} alt="" />
          </div>
          <div className={classes.text}>
            <h4>{project.name}</h4>
            <p className={classes.descripton}>{project.description}</p>
            <div className={classes.buttons}>
              <div className={classes.button_project}>
                <a target="_blank" href={project.view}>
                  <button>
                    <p>
                      View<i class="fas fa-eye"></i>
                    </p>
                  </button>
                </a>
              </div>
              <div className={classes.button_project}>
                <a target="_blank" href={project.code}>
                  <button>
                    <p>
                      {"<"} Code {"/>"}
                    </p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCardsWebsites;
