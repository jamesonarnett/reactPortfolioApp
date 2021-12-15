import React from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import classes from "./ButtonGroup.module.css";

const LinksButtonGroup = (props) => {
  return (
    <ButtonGroup className={classes.buttonOnTop}>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  );
};

export default LinksButtonGroup;
