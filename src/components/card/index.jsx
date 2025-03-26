import React from "react";
import { useNavigate } from "react-router";

function Card(props) {

  return (
    <div style={{ maxWidth: "200px", border: "1px solid" }} onClick={props.handleClick}>
      <img
        src={props.poster}
        style={{ border: "1px solid", height: "200px", width: "200px" }}
      />
      <h3>{props.title}</h3>
      <p>{props.rating}</p>
    </div>
  );
}

export default Card;
