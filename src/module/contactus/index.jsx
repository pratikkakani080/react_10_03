import React, { useState } from "react";

function ContactUs() {
  const [user, setUser] = useState({})
  console.log(user);
  
  // const handleChange = (e) => {
  //   // console.log(e);
  //   setFname(e.target.value)
  // }

  const handleSubmit = () => {
    // localStorage.setItem('fname', fname)
    // localStorage.setItem('lname', lname)
    localStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <div>
      <label htmlFor="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname"  onChange={(ev) => {setUser(ev.target.value); 
      // console.log(ev, ev.target.name, ev.target.value);
      }} />
      <br />
      <label htmlFor="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" onChange={(ev => {setUser(ev.target.value); 
      // console.log(ev, ev.target.name, ev.target.value);
      })} />
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" id="email" name="email" onChange={(ev => {setUser(ev.target.value);
      //  console.log(ev, ev.target.name, ev.target.value);
      })} />
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input type="password" id="password" name="password" onChange={(ev => setUser(ev.target.value))} />
      <br />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <br />
      <input type="password" id="confirmPassword" name="confirmPassword" onChange={(ev => setUser(ev.target.value))} />
      <br />
      <br />
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default ContactUs;
