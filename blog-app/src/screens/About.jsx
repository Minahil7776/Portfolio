import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className='intro-heading'>
          <h1>About Me</h1>
        </div>
        <div className='about'>
          <p><i className="fa-solid fa-user"></i>
            Hello! I am <span className='about-name' style={{ color: "#ff9900", fontSize: "20px" }}>Minahil Waseem</span>, a passionate software developer specializing in both frontend and backend development using the MERN stack (MongoDB, Express.js, React, and Node.js). With a solid foundation in computer science and practical experience in building dynamic, user-centric web applications, I am committed to delivering high-quality solutions that enhance user experience and meet client needs.
          </p>
          <p><i className="fa-solid fa-code"></i>
            As a frontend developer, I excel in creating intuitive and visually appealing interfaces, ensuring seamless user interactions. My backend development skills enable me to design and implement robust server-side logic, manage databases efficiently, and ensure smooth communication between the frontend and backend components. In addition to my MERN stack expertise, I am proficient in HTML, CSS, JavaScript, and C/C++, which allows me to tackle diverse projects with ease.
          </p>
          <p><i className="fa-solid fa-code-branch"></i>
            Beyond my technical abilities, I am a proactive learner, always eager to stay updated with the latest industry trends and technologies. I enjoy participating in coding challenges, exploring new tools and frameworks, and collaborating with like-minded professionals. My goal is to leverage my skills to contribute to innovative projects, solve challenging problems, and make a positive impact through technology.
          </p>
        </div>
        <button className='cv-btn'>
          <Link to='/CV'>View Resume</Link>
        </button>
      </div>
      <Footer />
    </div>
  )
}
