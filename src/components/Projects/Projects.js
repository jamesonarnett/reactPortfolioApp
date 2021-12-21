import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import jsCal from "../../Assets/projects/jsCal.png";
import blog from "../../Assets/projects/blog.png";
import keeper from "../../Assets/projects/keeper2.png";
import todo from "../../Assets/projects/todolist.png";
import bugs from "../../Assets/projects/bugSmash.png";
import secret from "../../Assets/projects/secret.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">PROJECTS </strong>
        </h1>
        <p style={{ color: "white", fontSize: "12px" }}>
          (Always looking to contribute. Message me!)
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="NoteApp"
              description="An app made with React.js to take and save notes! While simple, it is a great introduction to React and using modular compenents which leads to creation of content like this very webpage!"
              link="https://github.com/jamesonarnett/NoteApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="BlogApp"
              description='A vanilla "app" made with Node, EJS, and Express. Come post something, cause lord knows I never do'
              link="https://github.com/jamesonarnett/blogWebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDoList"
              description="The traditional Todo-List. Made with Node, express, MongoDB. Mulitple list rendered. Hosted on heroku, using mongoAtlas"
              link="https://github.com/jamesonarnett/ToDOListv2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsCal}
              isBlog={false}
              title="ObligatoryCalculator"
              description='The OG "learn programming" project. Vanilla JS at its best'
              link="https://github.com/jamesonarnett/ObligatoryCalculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bugs}
              isBlog={false}
              title="BugSmash"
              description="A harken back to web games we used to play as a child. No micro-transactions, no pop-ups, just pure BS"
              link="https://github.com/jamesonarnett/bugSmashGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secret}
              isBlog={false}
              title="SecretKeep"
              description="An app made with Node, using modern authentication practices, to keep your secrets safe... with me!"
              link="https://github.com/jamesonarnett/SignUp_OAuth"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;