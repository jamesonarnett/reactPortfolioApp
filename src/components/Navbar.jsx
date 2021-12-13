import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Logo from "./NavComponents/Logo";
import Links from "./NavComponents/Links";

const Navbar = (props) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 30) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div>
      <nav
        className={classes.nav}
        style={{ backgroundColor: colorChange ? "#423F3E" : "#301B3F" }}
      >
        {" "}
        <Logo />
        <h1 className={classes.text}>
          Hello! <span className={classes.wave}>👋</span> I'm Jameson Arnett
        </h1>
      </nav>
      <Links />
    </div>
  );
};

export default Navbar;
