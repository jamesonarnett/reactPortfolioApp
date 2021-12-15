import React from "react";
import classes from "./Contact.module.css";
import LinksButtonGroup from "./ButtonGroup";

const Contact = (props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.text}>Get in touch?</h3>
      <LinksButtonGroup />
    </div>
  );
};

export default Contact;
