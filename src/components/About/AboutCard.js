import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hello! I am <span className="purple">Jameson Arnett </span>
            currently residing in <span className="purple"> Louisiana!</span>
            <br />I am a junior pursuing a Bachelors of Computer Science from
            Colorado State University Global!
            <br />
            <br />
            When I'm not coding, or learning something new, I also enjoy
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming! (WoW, Divinity, COD)
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Media Junkie
            </li>
            <li className="about-activity">
              <ImPointRight /> Music! ~Forever LoFi Loop~
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
