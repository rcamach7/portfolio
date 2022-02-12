import "../styles/MyWork.css";
import { useState } from "react";
import snippetDemo from "../assets/project_demos/snippetDemo.gif";
import facebookDemo from "../assets/project_demos/facebookDemo.gif";
import cvDemo from "../assets/project_demos/cvDemo.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function MyWork() {
  const [projects] = useState([
    {
      name: "Facebook Clone",
      description:
        "An interactive, full stack, facebook clone built primarily using React. Allows user to make a post with text and/or pictures, like posts or comments, and stores this information in a real time database.",
      demo: facebookDemo,
      liveLink: "https://rcamach7.github.io/facebook-clone/",
      githubLink: "https://github.com/rcamach7/facebook-clone",
    },
    {
      name: "CV Generator",
      description:
        "A web application that allows you to generate a CV with input fields. Utilizes React, HTML, CSS, and multiple libraries to give user dynamic experience",
      demo: cvDemo,
      liveLink: "http://rcamach7.github.io/cv-creator/",
      githubLink: "https://github.com/rcamach7/cv-creator",
    },
    {
      name: "Snippet",
      description:
        "A web app that lets you upload and save frequently used code snippets for later use! Allows addition and deletion of categories and code blocks that are stored and queried from a firebase database.",
      demo: snippetDemo,
      liveLink: "https://rcamach7.github.io/snippet/",
      githubLink: "https://github.com/rcamach7/snippet",
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
      <img src={props.project.demo} alt="" className="project-screenshot" />

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
