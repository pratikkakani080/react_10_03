import React from 'react'

function ContactUs() {
  return (
    <div>
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" value="John"/><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
  <input type="submit" value="Submit"/>
    </div>
  )
}

export default ContactUs