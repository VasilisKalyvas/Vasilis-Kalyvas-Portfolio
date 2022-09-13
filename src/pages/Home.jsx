import React from 'react'
import "../styles/home.css";
import Me from '../assets/me.jpg'
const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <img src={Me} alt=''/>
        <h2>Vasilis Kalyvas</h2>
        <h3>Web Developer</h3>
      </div>
      <div className="skills">
      <h1> About Me</h1>
      <ol className="list">
      <li className="item">
        <span>
             I am a Front-End Developer with a passion for learning and creating web applications. 
            Also I am an undergraduate student at Informatics and Computer Engineering department at the University of West Attica.
        </span>
      </li>
      </ol>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
              BootStrap, MaterialUI, Yarn, StyledComponents, React-Icons
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, MongoDB, Socket.io
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home