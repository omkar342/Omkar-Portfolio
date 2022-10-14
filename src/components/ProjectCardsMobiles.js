import React from "react";
import classes from "./ProjectCardsWebsites.module.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import quiz from "../assets/quiz.jpeg";
import bitcoin from "../assets/bitcoin.jpeg";
import chat from "../assets/chat.png";
import destini from "../assets/destini.jpeg"
import bmi from "../assets/bmi.jpeg"
import clima from "../assets/clima.jpeg"

function ProjectCardsWebsites() {
  const events = [
    {
      name: "Bitcoin Ticker",
      description:
        "This is the Bitcoin Ticker App built using Flutter. On this app you can search for price of Bitcoin & various other cryptocurrencies in various fiat currencies.",
      view: "https://github.com/omkar342/bitcoin_ticker_flutter",
      code: "https://github.com/omkar342/bitcoin_ticker_flutter",
      image: bitcoin,
    },
    {
      name: "Chat App",
      description:
        "This is the Chat App built using Flutter. Authentication security feature is also added. On this app you can chat with your friends & family.",
      view: "https://github.com/omkar342/flutter_chat_app",
      code: "https://github.com/omkar342/flutter_chat_app",
      image: chat,
    },
    {
      name: "Destini App",
      description: "This is the Destini App built using Flutter. This app is a simple app to learn about Destiny stories.",
      view: "https://github.com/omkar342/destini_app_flutter",
      code: "https://github.com/omkar342/destini_app_flutter",
      image: destini,

    },
    {
      name: "Clima Weather App",
      description: "This is the Weather App built using Flutter. This app is a simple app to get to know the weather of any city.",
      view: "https://github.com/omkar342/clima_weatherApp_flutter",
      code: "https://github.com/omkar342/clima_weatherApp_flutter",
      image: clima,
    },
    {
      name: "Bmi Calculator App",
      description: "This is the BMI Calculator App built using Flutter. This app is a simple app to calculate your BMI.",
      view: "https://github.com/omkar342/bmi_calculator_flutter",
      code: "https://github.com/omkar342/bmi_calculator_flutter",
      image: bmi,
    },
    {
      name: "Basic Quiz App.",
      description: "This is the Basic Quiz App built using Flutter. This app is a simple app to test your knowledge & implement advance features of flutter such as navigation.",
      view: "https://github.com/omkar342/quiz_app_flutter",
      code: "https://github.com/omkar342/quiz_app_flutter",
      image: quiz,
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

export default ProjectCardsWebsites;
