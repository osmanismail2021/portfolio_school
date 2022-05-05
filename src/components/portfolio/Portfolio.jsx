import "./portfolio.scss"
import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
} from "../../data"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faRss } from "@fortawesome/free-solid-svg-icons";


export default function Portfolio() {
  const [selected, setSelected] = useState("web");
const [data, setData] = useState([]);
  const list = [
    {
        id: "web",
        title: "Web App",
    },
    {
        id: "mobile",
        title: "Mobile App",
    }
];

useEffect(()=>{
    switch(selected){
      
      case "web":
          setData(webPortfolio);
          break;
      case "mobile":
            setData(mobilePortfolio);
            break;
      default:
        setData(webPortfolio);
  }
},[selected])



  return (
    <div className='portfolio' id="portfolio">
        <div className="dikeyNav">
          <p>Portfolio</p>
          
        </div>
        <div className="second">
        
        <ul>
          {list.map((item) => (
            <PortfolioList 
              title={item.title} 
              active={selected === item.id} 
              setSelected={setSelected}
              id={item.id}
               />
          ))}
        </ul>
        <div className="container">
            {data.map((d)=> (
          
            
            <div className="item">
           <img
            src={d.img}
            alt="" />
            <h3>{d.title}</h3>
            
            
            <form action={d.github} method="get" target="_blank">
              <button id="github" type="submit"><FontAwesomeIcon icon={faGithub} size="2x" />GitHub</button>
            </form>

            <form action={d.link} method="get" target="_blank">
              <button id="live" type="submit"><FontAwesomeIcon icon={faRss} size="2x" />Live</button>
            </form>


           
           </div>
        
          ))}
        </div>
        </div>
       
      </div>
  )
}


