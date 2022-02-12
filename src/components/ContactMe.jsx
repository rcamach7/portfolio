import "../styles/ContactMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import happyMan from "../assets/man.png";

function ContactMe() {
  return (
    <footer className="ContactMe">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <p style={{ marginBottom: "10px" }}>
          Please get in touch if you think our work can be mutually beneficial!
        </p>

        <address>
          1234 Random Road
          <br />
          Random Town, California 12345
        </address>

        <p style={{ marginBottom: "5px" }}>
          (123)999-9999
          <br />
          example@gmail.com
        </p>

        <span className="contact-links">
          <a href="https://github.com/rcamach7">
            <FontAwesomeIcon className="contact-icon" icon={faGithub} />
          </a>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon className="contact-icon" icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/">
            <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
          </a>
        </span>
      </div>

      <div
        className="imageContainer"
        style={{ backgroundImage: `url(${happyMan})` }}
      ></div>
    </footer>
  );
}

export default ContactMe;
