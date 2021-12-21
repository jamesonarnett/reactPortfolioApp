import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Developer Projects"
              date="Sept 2020 - Current"
              content={[
                "ObligatoryCalculator-- Created using Vanilla Javascript, css, and html. Mastering the basics!",
                "BlogApp-- Created using EJS, Node, and mongoDB. A learning experience in database managment",
                "Pong ReVamped-- Created using Vanilla Javascript. A deep dive into OOP, and truly a labor of love! ",
                "NoteApp-- An app made with React.js to take and save all of your notes!! ",
                "ToDoList--  database with MongoDB and mongoose. Mulitple list rendered. Hosted on heroku, using mongoAtlas",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelors Computer Science- Colorado State University Global "
              date="2020 - Present"
              content={[]}
            />
            <Resumecontent
              title="Associates of Science Biology - Ranger College "
              date="2015-2016"
              content={[]}
            />

            <h3 className="resume-title">Achievements</h3>
            <Resumecontent
              title=""
              content={[`Still alive after 25 years of working on it`]}
            />
          </Col>
          <Col>
            <h3 className="resume-title">Previous Career</h3>
            <Resumecontent
              title=" Owner/Estimator -- J&M Renovations LLC "
              date="Oct 2020 - Dec 2021"
              content={[
                `50% Owner/Operator of a small construction company located in Lake Charles, LA`,
                `Delivered comprehensive bid proposals for construction projects and gained
client approval on costs.`,
                `Prepared material orders to complete projects on time and within budget.`,
                `Analyzed and calculated field measurements, survey plans and plot plans to
create proposals and process work orders.`,
              ]}
            />

            <Resumecontent
              title="Construction Lead -- Snyder Development"
              date="Oct 2017 - Oct 2020"
              content={[
                `Learned problem solving and persistence through renovating houses and small scale construction projects.`,
                `Maintained positive working relationships with customers, vendors, and subcontractors.`,
                `Took initiative to prioritize work needs, and to create solutions to jobsite challenges.`,
                `Communicated with a business owner, foreman, and contractors to maximize productivity and quality.`,
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
