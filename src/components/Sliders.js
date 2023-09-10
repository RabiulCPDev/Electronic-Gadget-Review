import React from 'react'
import myImage1 from '../image/image1.png';

const slider = () => {
  return (
    <div className="slider-section">
      {/* Left Column - Mobile Brands */}
      <div className="left-column">
        <h3>Top Mobile Brands</h3>
        <ul>
          <b>
          <li>Apple</li>
          <li>Samsung</li>
          <li>Xiaomi</li>
          <li>Oppo</li>
          <li>Vivo</li>
          </b>
          
        </ul>
      </div>

      {/* Middle Column - Image Slider */}
      <div className="middle-column">
        <div className="slider">
          {/* Images go here */}
          <img src={myImage1} alt="My Image11" />
          
        </div>
      </div>

      {/* Right Column - Laptop Brands */}
      <div className="right-column">
        <h3>Top Laptop Brands</h3>
        <ul>
          <b>
          <li>Asus</li>
          <li>HP</li>
          <li>Dell</li>
          <li>Lenevo</li>
          <li>Acer</li>
          </b>
        </ul>
      </div>
    </div>

  )
}

export default slider