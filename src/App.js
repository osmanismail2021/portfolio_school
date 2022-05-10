import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Footer from "./components/footer/Footer";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";




function App() {
  // const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     
      

      <div className="sections">
        <Intro/>
        <AboutMe/>
        <ProgressBar/>
        <Portfolio/>
        {/* <Works/> */}
        <Contact/>
        

      </div>
      
    </div>
  );
}

export default App;
