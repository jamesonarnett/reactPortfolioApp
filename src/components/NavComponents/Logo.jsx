import React from "react";
import logoImg from "../../assets/images/meImg.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img
        src={logoImg}
        alt="my logo here jArnett"
        className={classes.ProfileImg}
      />
    </div>
  );
};

export default Logo;
