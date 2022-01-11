import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hello!
            <br />
            <br />I am a junior pursuing a B.S in Computer Science from Colorado
            State University Global! I am currently residing in{" "}
            <span className="purple"> Louisiana!</span>
            <br />
            <br />I <span className="purple"> aspire</span> to leave my mark on
            the world through software development. The next Reddit? "The second
            page of the internet..." perhaps the idea is still in the works.
            <br />
            <br />
            When I'm not coding, I also <span className="purple"> enjoy</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading! My love for learning doesnt stop at
              coding.
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming! Who doesnt love Pokemon?
            </li>
            <li className="about-activity">
              <ImPointRight /> Music! Playing or Listening! ~Forever LoFi Loop~
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
