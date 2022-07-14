import React, { FC } from "react";
import ButtonProps from "./types";
import styles from "./index.module.css";

const Button: FC<ButtonProps> = ({ type = "primary", children }) => {
  const pickStyle = () => {
    switch (type) {
      case "primary":
        return styles.primary;
      case "whiteOutline":
        return styles.whiteOutline;
      default:
        return styles.secondary;
    }
  };
  return (
    <button className={`${styles.btn} ${pickStyle()} `}> {children}</button>
  );
};

export default Button;
