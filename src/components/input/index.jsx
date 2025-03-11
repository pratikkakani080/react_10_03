import React from "react";
import Button from "../button";

function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        placeholder={props.ph || 'Please enter value'}
        onChange={props.handleChange}
      />
      <Button color={props.buttonColor} buttonText={props.buttonText} redirectUrl={"test"} />
    </div>
  );
}

export default Input;
