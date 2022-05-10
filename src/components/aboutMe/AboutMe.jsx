import { PortraitTwoTone } from "@material-ui/icons";
import "./aboutMe.scss"

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Osman ISMAIL",
      title: "Front End Developer",
      img: "assets/portret5.png",
      desc:
        "Hello, I want to tell you about myself. My name is Osman. I was born in Bulgaria. When I was 3 years old, my family immigrated to Turkey. I completed my high school education in Turkey on electronics and electrotechnics. Then I came to Belgium. Here I first started working at Horeca. In 2010, I bought an Italian restaurant in Herentals and operated and transferred it for 2 years. Later on, I received cooking training for French/Belgian cuisine. After working in this sector for a while, I had a child and quit horeca due to working days and hours. Then I worked in the transport sector for about 7 years. In my last years in transport, i decided to change current sector to another and i did my research what else i could do. I was interested in Front-end development. I would not be able to work for a while as a result of a work accident with my wrist in my current job, and during this time I started research for Front End Development in terms of Design and creativity. At the end of 2021, i started a training on Front End Development and successfully finished it in 2022. I am excited to step into the industry..",
    },
    // {
    //   id: 2,
    //   name: "Alex Kalinski",
    //   title: "Co-Founder of DELKA",
    //   img:
    //     "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/toppng.com-youtube-icon-android-lollipop-512x512.png",
    //   desc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
    //   featured: true,
    // },
    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: "CEO of ALBI",
    //   img:
    //     "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/toppng.com-o-linkedin-512x512.png",
    //   desc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    // },
  ];
  return (
    <div className='aboutMe' id="aboutMe">
      <div className="dikeyNav">
          <p>About Me</p>
          
        </div>

        <div className="container">
        {data.map((d) => (

          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              
              <img className="user"
                src={d.img}
                alt="" />
              
            </div>
            <div className="center">
              {d.desc}

            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div>
      {/* <div className="container">
        {data.map((d) => (

          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/toppng.com-abstract-angle-arrow-signs-arrowheads-aşağı-ok-orange-curved-arrow-1292x1134.png"
                className="left"
                alt="" />
              <img className="user"
                src={d.img}
                alt="" />
              <img className="right"
                src={d.icon}
                alt="" />
            </div>
            <div className="center">
              {d.desc}

            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div> */}
    </div>
  )
}
