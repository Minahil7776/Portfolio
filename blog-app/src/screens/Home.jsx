import React,{ useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



export default function Home() {
  useEffect(()=>{
    const bgAnimation = document.getElementById("bgAnimation");
    const numOfBoxes = 400;
    for(let i=0; i<numOfBoxes; i++){
      const colorBox = document.createElement('div');
      colorBox.classList.add("colorBox");
      bgAnimation.append(colorBox)
    }
  },[])
  return (
    <div>
      {/* Navbar */}
        <Navbar/>
        {/* Main content */}
    <div>
      <div className='bgAnimation' id='bgAnimation'>
        <div className='backgroundAnim'></div>
      </div>
    <div className='main-container'>
        <div className='main-text'> 
            <h1>Hi! I am  
              <span  id="name-id"className='name'>M</span>
              <span className='name'>I</span>
              <span className='name'>N</span>
              <span className='name'>A</span>
              <span className='name'>H</span>
              <span className='name'>I</span>
              <span className='name'>L</span>
            </h1>
            <p>I love to learn and built scalable and optimized websites.</p>
        </div>
    </div>
    </div>
        {/* Footer */}
        <Footer/>
    </div>
  )
}
