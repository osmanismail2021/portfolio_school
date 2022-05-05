import { useState } from "react";
import "./contact.scss"
import {Person,Mail} from "@material-ui/icons"
import Footer from "../footer/Footer";
import "../footer/footer.scss"



export default function Contact() {
  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className='contact' id="contact">
     

    <div className="contact-form">
      <div className="dikeyNav">
          <p>Contact</p>
      </div>
    <div className="left">
        <h2>@ Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>

       
          
      </div>

      <div className="right">
        <img src="assets/pngwing.com (3).png" alt="" />
      </div>
    </div>

    


     <Footer/>
    </div>
    
  )
}
