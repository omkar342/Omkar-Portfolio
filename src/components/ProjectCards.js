import React from "react";
import classes from "./ProjectCards.module.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import mag from "../assets/mag.png";
import cowin from "../assets/Cowin.png";
import calculator from "../assets/calculator.png";
import news from "../assets/news.png"
import bank from "../assets/bank.png"
import teams from "../assets/teams.png"
import travel from "../assets/travel.png"
import movie from "../assets/movie.png"


function ProjectCards() {
  const events = [
    {
      name: "Cowin Clone",
      description:
        "This is the Cowin Clone Website built with React. On this website you can search for Covid-19 vaccination slots near you.",
      view: "https://cowin-19-4bebb.web.app/",
      code: "https://github.com/omkar342/Cowin-Clone",
      image: cowin,
    },
    {
      name: "React Calculator",
      description: "This is the basic Calculator Webapp built with React.",
      view: "https://react-calculator-97b0f.web.app/",
      code: "https://github.com/omkar342/React-Calculator",
      image: calculator,
    },
    {
      name: "New-s Tab Extension",
      description: "This is the new-tab type of extension which will keep you updated with latest news on your new tab.",
      view: "https://microsoftedge.microsoft.com/addons/detail/news-tab/anchgkkmjjfccdpcihekalfallhciohi",
      code: "https://github.com/omkar342/New-s-Tab",
      image: news,

    },
    {
      name: "Meeting Management",
      description: "This is the Website to manage your meetings. This Webapp will help user to manage their meetings & schedule their day accordingly.",
      view: "https://github.com/omkar342/Meeting-Management-System",
      code: "https://github.com/omkar342/Meeting-Management-System",
      image: teams,
    },
    {
      name: "Bank Management",
      description: "This website is the simulation of Bank-Management-System in which you can simulate the transaction.",
      view: "https://github.com/omkar342/bank-management",
      code: "https://github.com/omkar342/bank-management",
      image: bank,
    },
    {
      name: "Movieflix",
      description: "On this website you can search for the movies you wish & get to know more about that movie. It fetches all the information about movies using API.",
      view: "https://github.com/omkar342/MovieFlix-Wishlist",
      code: "https://github.com/omkar342/MovieFlix-Wishlist",
      image: movie,
    },
    {
      name: "Travel",
      description: "This is very basic front end web app for Tourism Website.",
      view: "https://github.com/omkar342/Tourism-Website",
      code: "https://github.com/omkar342/Tourism-Website",
      image: travel,
    },
  ];

  const Background =
    "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
  //   {myArray.map(name => (
  //     <li>
  //       {name}
  //     </li>
  //   ))}

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

export default ProjectCards;
