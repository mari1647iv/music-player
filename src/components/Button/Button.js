import React from "react";
import "./Button.css";

function Button(props) {
  const { type, children, isDisabled, onClick } = props;
  return (
    <button className={type+"-button"} disabled={isDisabled} onClick={onClick}> {children} </button>
  );
}

export default Button;