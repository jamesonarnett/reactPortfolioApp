import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import jChat from "../../Assets/projects/jChat.png";
import blog from "../../Assets/projects/blog.png";
import keeper from "../../Assets/projects/keeper2.png";
import todo from "../../Assets/projects/todolist.png";
import JGJ from "../../Assets/projects/jamGameJam.png";
import secret from "../../Assets/projects/secret.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">PROJECTS </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jChat}
              isBlog={false}
              title="jChat"
              description="An app made with React, Firebase, and chatEngine! Create your personal space, invite your friends, and chat with anyone, anywhere!"
              link="https://github.com/jamesonarnett/jChat"
              linkP="https://zjchat.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JGJ}
              isBlog={false}
              title="JamGameJam"
              description="One of my most favorite projects! A resource with a game database, a list of Free to play games, pokeApi, and a few games made with Javascript!"
              link="https://github.com/jamesonarnett/JamGameJam"
              linkP="https://jamgamejam.herokuapp.com/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="BlogApp"
              description="A fullstack app made with Node, EJS, and Express. Come post something, cause lord knows I never do"
              link="https://github.com/jamesonarnett/blogWebsite"
              linkP="https://jamblogsite.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="NoteApp"
              description="An app made with React.js to take and save notes! Bet you cant find the Easter Egg!"
              link="https://github.com/jamesonarnett/NoteApp"
              linkP="https://notekeepy.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDoList"
              description="The traditional Todo-List. Made with Node, express, MongoDB. Mulitple list rendered. Hosted on heroku, using mongoAtlas"
              link="https://github.com/jamesonarnett/ToDOListv2"
              linkP="https://jamalist.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secret}
              isBlog={false}
              title="SecretKeep"
              description="An app made with Node, using modern authentication practices, to keep your secrets safe... with me!"
              link="https://github.com/jamesonarnett/SignUp_OAuth"
              linkP="https://secretkeep.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
