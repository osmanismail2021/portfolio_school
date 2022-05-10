import "./intro.scss"
import Topbar from "../topbar/Topbar";
import { useState } from "react";
import Menu from "../menu/Menu";
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import cv from '../assets/OSMAN ISMAIL (9).pdf'
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


export default function Intro() {
  const textRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      strings:["Html5", "Css3", "Javascript", "Bootstrap", "React","React-Native", "Node.js", "MongoDB"],
    });

  },[])

  return (
    <div className='intro' id="intro">

<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />


        <div className="left">
        <div className="imgContainer">
            <img className="vector" src="./assets/—Pngtree—orange juice liquid crown_5802551.png" alt="" />
            <img className="osman" src="assets/blackwitsaydam.png" alt="" />
          </div>
        </div>
        <div className="right">
        
          <div className="wrapper">
            <div className="box">
              <div className="inner">
                <span>Hello There</span>
              </div>
            <div className="inner">
                <span>Hello There</span>
            </div>
          </div>
              <h1 id="text3d">I'm Osman ISMAIL</h1>
              <h3>FrontEnd Developer <span className="neon" ref={textRef}></span></h3>



        <ul>
          <li>
          <a href="https://www.youtube.com/channel/UCyb7796M2fVR404J2MiEVWw" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </li>
          <li>
          <a href="https://www.facebook.com/osman.sansar.3" className="facebook social">
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

             
              <a className="cv" 
                href={cv} 
                download={cv} 
                rel="noopener noreferrer">Download CV</a>


            </div>

            

            <a href="#aboutMe">
              <img src="assets/down-arrow.png" alt="" />
            </a>

           


        </div>
      </div>
  )
}
