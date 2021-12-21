import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/botImage.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Technology has always been a passion of mine! From sharing my
              families first home computer, to building my first very own PC at
              14, I've been
              <i>
                {" "}
                <b className="purple">HOOKED!</b>
              </i>
              <br />
              <br />
              Forever learning classics like
              <i>
                <b className="purple"> Javascript, Python, and Java </b>
              </i>
              <br />
              <br />I am most interested in working with new&nbsp;
              <i>
                <b className="purple">Web Technologies</b> and also in areas
                related to{" "}
                <b className="purple">
                  Blockchain, CyberSecurity, and Automation
                </b>
              </i>
              <br />
              <br />
              Always searching to learn something new, I have been tackling{" "}
              <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> Modern Javascript Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i>{" "}
              most recently!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jamesonarnett"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Lil_LetDown"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jameson-arnett-22a2a2109//"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
