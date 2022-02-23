import "../styles/MyWork.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function MyWork() {
  const [projects] = useState([
    {
      name: "Facebook Clone",
      description:
        "An interactive, full stack, facebook clone built primarily using React. Allows user to make a post with text and/or pictures, like posts or comments, and stores this information in a real time database.",
      demo: "https://res.cloudinary.com/de2ymful4/image/upload/v1645646368/portfolio/project_demos/facebookDemo_n1qyzh.gif",
      demoStill:
        "https://res.cloudinary.com/de2ymful4/image/upload/v1645646184/portfolio/project_demos/facebookStill_zobfos.png",
      liveLink: "https://rcamach7.github.io/facebook-clone/",
      githubLink: "https://github.com/rcamach7/facebook-clone",
    },
    {
      name: "CV Generator",
      description:
        "A web application that allows you to generate a CV with input fields. Utilizes React, HTML, CSS, and multiple libraries to give user dynamic experience",
      demo: "https://res.cloudinary.com/de2ymful4/image/upload/v1645646346/portfolio/project_demos/cvDemo_dnt1xq.gif",
      demoStill:
        "https://res.cloudinary.com/de2ymful4/image/upload/v1645646186/portfolio/project_demos/cvStill_wvtf9e.png",
      liveLink: "http://rcamach7.github.io/cv-creator/",
      githubLink: "https://github.com/rcamach7/cv-creator",
    },
    {
      name: "Snippet",
      description:
        "A web app that lets you upload and save frequently used code snippets for later use! Allows addition and deletion of categories and code blocks that are stored and queried from a firebase database.",
      demo: "https://res.cloudinary.com/de2ymful4/image/upload/v1645646273/portfolio/project_demos/snippetDemo_e1cg9w.gif",
      demoStill:
        "https://res.cloudinary.com/de2ymful4/image/upload/v1645646184/portfolio/project_demos/snippetStill_gk38lv.png",
      liveLink: "https://rcamach7.github.io/snippet/",
      githubLink: "https://github.com/rcamach7/snippet",
    },
    {
      name: "Weather App",
      description:
        "View daily and weekly weather forecasts using Zip-Codes and have information displayed dynamically using API calls!",
      demo: "https://res.cloudinary.com/de2ymful4/image/upload/v1645646229/portfolio/project_demos/weatherApp_vfgmvm.gif",
      demoStill:
        "https://res.cloudinary.com/de2ymful4/image/upload/v1645646194/portfolio/project_demos/weatherStill_b1ckdk.png",
      liveLink: "https://rcamach7.github.io/weather-app-react/?#",
      githubLink: "https://github.com/rcamach7/weather-app-react",
    },
    {
      name: "Memory Game",
      description:
        "A React based web app which simulates a memory game: Get points for choosing a card, but don't choose the same card twice!",
      demo: "https://res.cloudinary.com/de2ymful4/image/upload/v1645646251/portfolio/project_demos/memoryGame_ywpmbd.gif",
      demoStill:
        "https://res.cloudinary.com/de2ymful4/image/upload/v1645646187/portfolio/project_demos/memoryGame_tyrjxm.png",
      liveLink: "https://rcamach7.github.io/memory-game-react/",
      githubLink: "https://github.com/rcamach7/memory-game-reactt",
    },
  ]);

  return (
    <div className="MyWork">
      <h2>My Work</h2>

      <div className="projectContainer">
        {projects.map((curProject, i) => {
          return <Project key={i} project={curProject} />;
        })}
      </div>
    </div>
  );
}

function Project(props) {
  return (
    <div className="Project">
      {/* <img src={props.project.demo} alt="" className="project-screenshot" /> */}
      {/* <img src={cvStill} alt="" /> */}
      <div className="imageWrapper">
        <img src={props.project.demo} alt="" />
        <img
          className="imageWrapper-still"
          src={props.project.demoStill}
          alt=""
        />
      </div>

      <h3>{props.project.name}</h3>
      <p>{props.project.description}</p>

      <span className="links">
        <a href={props.project.githubLink}>
          <FontAwesomeIcon icon={faGithub} className="project-link" />
        </a>
        <a href={props.project.liveLink}>
          <FontAwesomeIcon icon={faLink} className="project-link" />
        </a>
      </span>
    </div>
  );
}

export default MyWork;
