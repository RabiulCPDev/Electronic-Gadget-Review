import React from 'react';
import myImage1 from '../image/image1.png';

const slider = () => {
  return (
    <div className="slider-section flex justify-between items-start p-20">
      <div className="left-column flex-1 mr-20 text-center">
        <h3 className="pb-5 border-b-2 border-black">Top Mobile Brands</h3>
        <ul className="list-none">
          <b>
            <li>Apple</li>
            <li>Samsung</li>
            <li>Xiaomi</li>
            <li>Oppo</li>
            <li>Vivo</li>
          </b>
        </ul>
      </div>

  
      <div className="middle-column flex-3">
        <div className="slider">

          <img src={myImage1} alt="My Image11" className="w-full h-auto" />
        </div>
      </div>

      <div className="right-column flex-1 ml-10 text-center">
        <h3 className="pb-5 ml-2 border-b-2 border-black">Top Laptop Brands</h3>
        <ul className="list-none">
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
  );
};

export default slider;
