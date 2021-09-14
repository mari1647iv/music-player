import React from "react";
import "./Button.css";

function Button(props) {
  const { type, children, isDisabled } = props;
  return (
    <button className={type+"-button"} disabled={isDisabled}> {children} </button>
  );
}

export default Button;