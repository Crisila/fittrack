import React from "react";
import "../Styles/Contact.css";
import contactImg from '../assets/contact-image.jpg';

function Contact() {
  return (
    <div className="contact">
     <div className="contact-header">
      <img src={contactImg} alt="contact-me" className="pagetitle-image" />
     </div>

     <div className="contact-text">
      Call: 123-456-7890
      <br />
      Email: 8tZkS@example.com
        <br />

      Address: 1234 Main St, Anytown, USA
     </div>

     </div>
  )
}
export default Contact