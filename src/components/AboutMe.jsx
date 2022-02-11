import "../styles/AboutMe.css";
import mug from "../assets/mug.jpeg";

function AboutMe() {
  return (
    <header className="AboutMe">
      <div className="myPicture">
        <div style={{ backgroundImage: `url(${mug})` }}>Ricardo</div>
      </div>
      <div className="myInfo">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </header>
  );
}

export default AboutMe;
