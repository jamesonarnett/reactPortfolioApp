import React from "react";
import img from "../../assets/images/elon.jpg";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={classes.CardBody}>
      <h3>Title</h3>
      <img className={classes.ProjectImg} src={img} alt="ProjectImg" />
      <p>Brief about project</p>
    </div>
  );
};

export default ProjectCard;
