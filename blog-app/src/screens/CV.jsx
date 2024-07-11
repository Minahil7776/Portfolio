import React from 'react'

export default function () {
    const imageStyle = {
        maxWidth: '100%',
        height: '100vh',
        display: 'block',
        margin: '0 auto', // Center the image
        border: '2px solid #182d49', // Add a border with your preferred color
        borderRadius: '8px', // Optional: add rounded corners
      };
  return (
    <div>
        <img src='/pics/CV-minahil-waseem.png' alt='Resume-Img' style={imageStyle}></img>
    </div>
  )
}
