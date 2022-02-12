import "../styles/Home.css";
import AboutMe from "../components/AboutMe";
import MyWork from "../components/MyWork";
import ContactMe from "../components/ContactMe";

function Home() {
  return (
    <div className="App">
      <AboutMe />
      <MyWork />
      <ContactMe />
    </div>
  );
}

export default Home;
