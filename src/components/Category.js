import React from 'react'
import myImagepn from '../image/mobile.png';
import myImagec from '../image/computer.jpg';
import myImagehpn from '../image/headphone.png';
import myImagesw from '../image/smartwatch.png';
import myImagegm from '../image/gaming.png';

const Category = () => {
  return (
      <div>
        <h1>Browse By Category</h1>
    <div className="category-section">
      <div className="category-box">
      <img class ="icon-size" src={myImagepn} alt="My Image" />
         <h5>Phone</h5>
      </div>
        <div className="category-box">
        <img class ="icon-size" src={myImagec} alt="My Image" />
            <h5>Computer</h5>
        </div>
         <div className="category-box">
         <img class ="icon-size"src={myImagehpn} alt="My Image" />
            <h5>Headphone</h5>
         </div>
         <div className="category-box">
         <img class ="icon-size"src={myImagehpn} alt="My Image" />
            <h5>Camera</h5>
         </div>
            <div className="category-box">
            <img class ="icon-size" src={myImagesw} alt="My Image" />
              <h5>Smartwatch</h5>
           </div>
         <div className="category-box">
         <img class ="icon-size" src={myImagegm} alt="My Image" />
             <h5>Gaming</h5>
         </div>
  </div>
      </div>
  )
}

export default Category