import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>
      {/* Projects content */}

      <h1 className='project-heading'>My Projects</h1>
      <div className='project-container'>
        <div className='project'>
          <div className='card1'>
            <img src='/pics/Burger.jpg' alt='project-img'></img>
            <div className='card-body'>
              <h1>Go Food</h1>
              <p>Go Food is a dynamic web application. It is a food delevery website it can take order from user and send to admin, user can make account by signUp and it stores all the food delevery info of its user like(food name, time, date etc). This website created in MERN stack.</p>
            
            <div className='link-btn'>
            <div className='project-links'>
            <Link to="#">#MongoDb</Link>
            <Link to="#">#ReactJs</Link>
            <Link to="#">#NodeJs</Link>
            </div>
            <button><Link to="https://github.com/Minahil7776/GoFood" target='_blank'>Github</Link></button>
            </div>
          </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className='project'>
          <div className='card2'>
            <img src='/pics/home-image1.jpg' alt='project-img'></img>
            <div className='card-body'>
              <h1>Storyify Blog</h1>
              <p>Storyify Blog is a dynamic web application. It is a blogging website. I uses MongoDb database in it which saves user data when account is created on it. I have used restful API in it. This website created in MERN stack.</p>
            
            <div className='link-btn'>
            <div className='project-links'>
            <Link to="#">#MongoDb</Link>
            <Link to="#">#ReactJs</Link>
            <Link to="#">#NodeJs</Link>
            </div>
            <button><Link to="https://github.com/Minahil7776/StoryifyBlog" target='_blank'>Github</Link></button>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  )
}
