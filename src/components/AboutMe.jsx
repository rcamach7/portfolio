import "../styles/AboutMe.css";
import mug from "../assets/mug.jpeg";
import blueBackground from "../assets/bk.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
  return (
    <header
      className="AboutMe"
      // style={{ backgroundImage: `url(${blueBackground})` }}
    >
      <div className="myPicture">
        <div
          className="imageContainer"
          style={{ backgroundImage: `url(${mug})` }}
        >
          <p className="myPicture-name">Ricardo Camacho</p>
        </div>
      </div>
      <div className="myInfo">
        <div className="wrapper">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="external-icons">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutMe;
