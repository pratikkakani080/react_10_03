import React, { useState } from "react";
import { emailRegex } from "../../utils";

function ContactUs() {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  console.log("error", error);
  console.log("user", user);

  const handleChange = (ev) => {
    // setUser((prev) => {
    //   return { ...prev, [ev.target.name]: ev.target.value };
    // })
    const { name, value, checked } = ev.target;
    setUser({ ...user, [name]: name === "tncapply" ? checked : value });
    setError({ ...error, [name]: "" });
  };

  const isValidate = () => {
    let formIsValid = true;
    let errors = {};
    if (!user.fname || user.fname.trim() === "") {
      formIsValid = false;
      errors.fname = "please enter valid first name";
    }
    if (!user.lname || user.lname.trim() === "") {
      formIsValid = false;
      errors.lname = "please enter valid last name";
    }
    if (
      !user.email ||
      user.email.trim() === "" ||
      !emailRegex.test(user.email)
    ) {
      formIsValid = false;
      errors.email = "please enter valid email";
    }
    if (!user.password || user.password.trim() === "") {
      formIsValid = false;
      errors.password = "please enter valid password";
    }
    if (!user.confirmPassword || user.confirmPassword.trim() === "") {
      formIsValid = false;
      errors.confirmPassword = "please enter valid confirm password";
    } else if (user.confirmPassword !== user.password) {
      formIsValid = false;
      errors.confirmPassword = "password does not match";
    }
    if (!user.tncapply) {
      formIsValid = false;
      errors.tncapply = "please tick the box";
    }
    setError(errors);
    return formIsValid;
  };

  const handleSubmit = () => {
    if (isValidate()) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  return (
    <div>
      <label htmlFor="fname">
        First name:
        {error.fname && (
          <span style={{ color: "red", fontSize: "10px" }}>
            * {error.fname}
          </span>
        )}
      </label>
      <br />
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={(ev) => handleChange(ev)}
      />
      <br />
      <label htmlFor="lname">
        Last name:{" "}
        {error.lname && (
          <span style={{ color: "red", fontSize: "10px" }}>
            * {error.lname}
          </span>
        )}
      </label>
      <br />
      <input
        type="text"
        id="lname"
        name="lname"
        onChange={(ev) => handleChange(ev)}
      />
      <br />
      <label htmlFor="email">
        Email:{" "}
        {error.email && (
          <span style={{ color: "red", fontSize: "10px" }}>
            * {error.email}
          </span>
        )}
      </label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        onChange={(ev) => handleChange(ev)}
      />
      <br />
      <label htmlFor="password">
        Password:{" "}
        {error.password && (
          <span style={{ color: "red", fontSize: "10px" }}>
            * {error.password}
          </span>
        )}
      </label>
      <br />
      <input
        type="password"
        id="password"
        name="password"
        onChange={(ev) => handleChange(ev)}
      />
      <br />
      <label htmlFor="confirmPassword">
        Confirm Password:{" "}
        {error.confirmPassword && (
          <span style={{ color: "red", fontSize: "10px" }}>
            * {error.confirmPassword}
          </span>
        )}
      </label>
      <br />
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        onChange={(ev) => handleChange(ev)}
      />
      <br />
      <input
        type="checkbox"
        id="tncapply"
        name="tncapply"
        onChange={(ev) => handleChange(ev)}
      />
      <label for="tncapply"> I accept terms and conditions</label>
      <br></br>
      <br />
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default ContactUs;
