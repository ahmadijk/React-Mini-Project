import React from "react";
import Navbar from "./Navbar";
import "./Contact.css"
function Contact(){
    return(<>
    <Navbar/>
    <div className="P-contact">
 <div className="contact-form">
  <h2>Contact Us</h2>
   <form >
    <label >Name:</label>
    <input type="text"  name="name" required></input>
    <label >Email:</label>
    <input type="email"  name="email" required></input>
    <label >Message:</label>
    <textarea name="message" ></textarea>
    <button type="submit" >Send</button>
  </form>
</div>
</div>

    </>)
}
export default Contact ;