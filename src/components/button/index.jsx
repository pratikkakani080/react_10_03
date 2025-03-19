import React from "react";

export default function Button(props) {
  return (
    <button
      style={{
        color: props.color || "yellow",
        fontSize: props.fontSize || "14px",
      }}
      onClick={props.handleClick}
    >
      {props.buttonText || "Click me"}
    </button>
  );
}
