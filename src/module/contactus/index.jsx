import React, { useEffect, useState } from "react";
import { emailRegex } from "../../utils";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

function ContactUs() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [params] = useSearchParams()
  const id = params.get('id')
  console.log('id**', id);

  useEffect(() => {
    if (id) {
      const storedData = JSON.parse(localStorage.getItem('user'))
      setUser(storedData.find(el => el.id === id))
    }
  }, [id])
  
  
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
    let users = JSON.parse(localStorage.getItem("user")) || [];
    if (isValidate()) {
      if (id) {
        // existing data mapping
        users = users.map(el => el.id === id ? user : el)
      } else {
        users.push({ ...user, id: uuidv4() });
      }
      localStorage.setItem("user", JSON.stringify(users));
      toast.success("User successfully registered");
      navigate("/users");
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
        value={user.fname}
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
        value={user.lname}
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
        value={user.email}
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
        value={user.password}
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
        value={user.confirmPassword}
        onChange={(ev) => handleChange(ev)}
      />
      <br />
      <input
        type="checkbox"
        id="tncapply"
        name="tncapply"
        checked={user.tncapply}
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
