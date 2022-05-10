import "./footer.scss"
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
import {Person,Mail} from "@material-ui/icons"


export default function Footer() {
  return (
    <div className='footer'>
        <a href="#intro">Home</a>
        <a href="#aboutMe">About Me</a>
        <a href="#progressbar">Educations & Skills</a>
        <a href="#portfolio">Portfolio</a>
        {/* <a href="#works">Works</a> */}
        <a href="#contact">Contact</a>

        

        <ul id="socialIcons">
        <div className="itemContainer">
            <Person className="icon" />
            <span>+32 492 07 56 63</span>
          </div>
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

          <div className="itemContainer">
            <Mail className="icon" />
            <span>osman@ism@live.nl</span>
          </div>
          
        </ul>

        
        
        <p>copyright © 2022 design and developed by Osman ISMAIL</p>

    </div>
  )
}
