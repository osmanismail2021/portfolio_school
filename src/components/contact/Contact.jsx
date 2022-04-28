import { useState } from "react";
import "./contact.scss"
import {Person,Mail} from "@material-ui/icons"
import Footer from "../footer/Footer";
import "../footer/footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faGithub,
    faInstagram,
    faWhatsapp,
    faTwitter
} from "@fortawesome/free-brands-svg-icons"
import { faSquarePhone, faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";


export default function Contact() {
  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className='contact' id="contact">
     

    <div className="contact-form">
    <div className="left">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>

        <div className="itemContainer">
            <Person className="icon" />
            <span>+32 492 07 56 63</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>osman@ism@live.nl</span>
          </div>
      </div>

      <div className="right">
        <img src="assets/contact.png" alt="" />
      </div>
    </div>

    <ul>
          <li>
          <a href="https://www.youtube.com/channel/UCyb7796M2fVR404J2MiEVWw" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </li>
          <li>
          <a href="#" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </li>
          <li>
          <a href="https://github.com/osmanismail2021" className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
          <a href="https://www.instagram.com/marr.adentroo" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li>
          <a href="#" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li>
          <a href="https://api.whatsapp.com/send?phone=32492075663&text=This%20is%20test%20Message" className="whatsapp social">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </li>
          <li>
          <a href="#contact" className="phone social">
                <FontAwesomeIcon icon={faSquarePhone} size="2x" />
            </a>
          </li>
          <li>
          <a href="#contact" className="email social">
                <FontAwesomeIcon icon={faEnvelopesBulk} size="2x" />
            </a>
          </li>
        </ul>


     <Footer/>
    </div>
    
  )
}
