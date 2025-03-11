import React from "react";

export default function Button(props) {
  return (
    <a href={props.redirectUrl} target="blank">
      <button style={{ color: props.color || "yellow" }}>
        {props.buttonText || "Click me"}
      </button>
    </a>
  );
}
