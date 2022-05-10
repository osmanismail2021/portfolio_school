import { useState } from "react";
import "./contact.scss"
import {Person,Mail} from "@material-ui/icons"
import Footer from "../footer/Footer";
import "../footer/footer.scss"

import emailjs from "emailjs-com";
import React from "react";
import Swal from 'sweetalert2'




export default function Contact() {
  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)

    emailjs
      .sendForm(
        "service_yojblms",
        "template_99idjbg",
        e.target,
        "8gnJo9--eF8jJobv5"
      )
      .then(
        result => {
          console.log("result" + result.text);
        
         
          Swal.fire({
               //timer: 2000
             position: 'midden',
             title: 'Your mail has arrived.',
            // showConfirmButton: false,
           
          }
          
           
            
          ) 
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

    
  

  return (
    <div className='contact' id="contact">
     

    <div className="contact-form">
      <div className="dikeyNav">
          <p>Contact</p>
      </div>
      <div className="column">
        <div className="left">
        <h2>@ Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="email"
              className="from_name"
              placeholder="Email"
              name="from_name"
              required />
          <textarea type="text"
              className="message"
              placeholder="Message"
              name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span className="thnx">Thanks, I'll reply ASAP</span>}
        </form>

       
          
      </div>

      <div className="right">
        <img src="assets/pngwing.com (3).png" alt="" />
      </div>
      </div>
    
    </div>

    


     <Footer/>
    </div>
    
  )
}
