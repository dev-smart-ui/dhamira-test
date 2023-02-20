/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const style = {
  burger: {
    fontSize: 0,
    position: "relative",
    height: "20px",
    width: "25px",
    cursor: "pointer",
    backgroundColor: "transparent",
    mb: "2px",
    zIndex: 20,
    display: [null, "none"],
    active: {
      boxShadow: "none",
      top: "calc(50% - 1.5px)",
      "&:nth-child(1)": {
        transform: "rotate(45deg)",
      },
      "&:nth-child(2)": {
        transform: "rotate(-45deg)",
      },
      "&:nth-child(3)": {
        transform: "rotate(-45deg)",
        opacity: 0,
      },
    },
  },
  line: {
    position: "absolute",
    width: "100%",
    height: "2px",
    left: 0,
    right: 0,
    transition: "0.3s",
    borderRadius: "3px",
    backgroundColor: "black",

    "&:nth-child(1)": {
      top: "2px",
    },
    "&:nth-child(2)": {
      top: "8.5px",
    },
    "&:nth-child(3)": {
      top: "15px",
      left: 0,
    },
  },
};

const Burger = ({ burgerToggle, burgerIsOpen }) => {
  const matchedStyles = !burgerIsOpen
    ? style.line
    : { ...style.line, ...style.burger.active };

  return (
    <button onClick={burgerToggle} sx={style.burger}>
      <span sx={matchedStyles}></span>
      <span sx={matchedStyles}></span>
      <span sx={matchedStyles}></span>
    </button>
  );
};

export default Burger;
