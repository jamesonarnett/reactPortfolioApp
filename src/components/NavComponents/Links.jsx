import React, { useState } from "react";
import classes from "./Links.module.css";

const Links = (props) => {
  return (
    <div className={classes.LinksContainer}>
      <ul className={classes.zIndex}>
        <li className={classes.ListItem}>
          <a style={{ textDecoration: "none" }} href="#hero">
            <span>Home</span>
          </a>
        </li>
        <li className={classes.ListItem}>
          <a style={{ textDecoration: "none" }} href="#about">
            <span>About</span>
          </a>
        </li>
        <li className={classes.ListItem}>
          <a style={{ textDecoration: "none" }} href="#about">
            <span>Resume</span>
          </a>
        </li>
        <li className={classes.ListItem}>
          <a style={{ textDecoration: "none" }} href="#about">
            <span>Portfolio</span>
          </a>
        </li>
        <li className={classes.ListItem}>
          <a style={{ textDecoration: "none" }} href="#about">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
