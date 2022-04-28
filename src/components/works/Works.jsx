// import { React, useState } from "react";
// import "./works.scss"

// export default function Works() {
//   const [currentSlide,setCurrentSlide] = useState(0);
//   const data = [
//     {
//       id: 1,
//       icon: "./assets/mobile.png",
//       title: "Chat App",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://blog.happyfox.com/wp-content/uploads/2019/05/in-app-chat-blog-cover-image.png",
//     },
//     {
//       id: 2,
//       icon:"./assets/globel.png",
//       title: "Weather App",
//       desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://en.baaghitv.com/wp-content/uploads/2020/07/new-history-forecast-bulk.png",
//     },
//     {
//       id: 3,
//       icon:"./assets/writting.png",
//       title: "Quiz App",
//       desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/width:1200/height:800/plain/https://s3-newsifier.ams3.digitaloceanspaces.com/androidworld.be/images/2020-10/Quiz-header-5f997fed15195.jpg",
//     },
//   ];
//   const handleClick = (way)=> {
//     way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
//     setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
//   }
//   return (
//     <div className='works' id="works">
//       <div className="slider" style={{ transform: `traslateX(-${currentSlide * 100}vw)`}}>
//         {data.map((d) => (

//         <div className="container">
//           <div className="item">
//             <div className="left">
//               <div className="leftContainer">
//                 <div className="imgContainer">
//                   <img src={d.icon} alt="" />
//                 </div>
//                 <h2>{d.title}</h2>
//                 <p>
//                   {d.desc}
//                 </p>
//                 <span>Projects</span>
//               </div>
//             </div>
//             <div className="right">
//               <img src="https://miro.medium.com/max/1252/0*M3SGcDdpXw2F6ggE" alt="" />
//             </div>
//           </div>
          
//         </div>
//         ))}
//       </div>
//       <img src="assets/Right-Arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
//       <img src="assets/Right-Arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>
//     </div>
//   )
// }

import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
            id: 1,
            icon: "./assets/mobile.png",
            title: "Chat App",
            desc:
              "Lorem Ipsum",
            img:
              "https://blog.happyfox.com/wp-content/uploads/2019/05/in-app-chat-blog-cover-image.png",
          },
          {
            id: 2,
            icon:"./assets/globel.png",
            title: "Weather App",
            desc:"Lorem Ipsum",
            img:
              "https://en.baaghitv.com/wp-content/uploads/2020/07/new-history-forecast-bulk.png",
          },
          {
            id: 3,
            icon:"./assets/writting.png",
            title: "Quiz App",
            desc:"Lorem Ipsum",
            img:
              "https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/width:1200/height:800/plain/https://s3-newsifier.ams3.digitaloceanspaces.com/androidworld.be/images/2020-10/Quiz-header-5f997fed15195.jpg",
          },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/Right-Arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/Right-Arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}