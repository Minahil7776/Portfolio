import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contect() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch("http://localhost:5000/send-email", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({ name, email, message })
          });
          const data = await response.text();
          if (response.ok) {
              alert("Email sent successfully");
              setName('');
              setEmail('');
              setMessage('');
          } else {
              alert('Error sending email: ' + data);
          }
      } catch (error) {
          console.error('Error:', error);
          alert('Failed to send email');
      }
  };
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* Contect content */}
      <div className='contect-container'>
        <div className='contect'>
          <div className='contect-text'>
            <p>REACH OUT TO ME</p>
            <h1>Contact.</h1>
          </div>
          <div className='contect-from'>
            <label>Your Name</label>
            <input type='text' name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'></input>
            <label>Your email</label>
            <input type='email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'></input>
            <label>Your message</label>
            <textarea name='message' value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Do you have anything to say?' ></textarea>
            <button className='contect-btn' onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
