import classes from "./App.module.css";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/PortfolioProjects/ProjectCard";
// import Particles from "react-tsparticles";

function App(props) {
  return (
    <div fluid className="App">
      <Navbar />
      <div fluid className={classes.CardContainer}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default App;
