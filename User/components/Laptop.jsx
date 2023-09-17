import React from 'react';
import myImageapple from '../image/new/apple.jpg';
import myImageasus from '../image/new/asus.png';
import myImagehp from '../image/new/hp.png';
import myImagedell from '../image/new/dell.png';
import myImagelenevo from '../image/new/lenevo.png';
import myImageacer from '../image/new/acer.png';

const Laptop = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Computer Category</h1>
      <div className="flex justify-between items-center p-5 bg-white">
        <div className="category-box shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12 mr-5">
          <img className="w-10 h-10 mx-auto mb-2" src={myImageasus} alt="My asus" />
          <h5 className="text-sm">ASUS</h5>
        </div>
        <div className="category-box shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12 mr-5">
          <img className="w-10 h-10 mx-auto mb-2" src={myImagehp} alt="My hp" />
          <h5 className="text-sm">HP</h5>
        </div>
        <div className="category-box shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12 mr-5">
          <img className="w-10 h-10 mx-auto mb-2" src={myImagedell} alt="My dell" />
          <h5 className="text-sm">DELL</h5>
        </div>
        <div className="category-box shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12 mr-5">
          <img className="w-10 h-10 mx-auto mb-2" src={myImageacer} alt="My acer" />
          <h5 className="text-sm">ACER</h5>
        </div>
        <div className="category-box shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12 mr-5">
          <img className="w-10 h-10 mx-auto mb-2" src={myImageapple} alt="My apple" />
          <h5 className="text-sm">APPLE</h5>
        </div>
        <div className="category-box shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12">
          <img className="w-10 h-10 mx-auto mb-2" src={myImagelenevo} alt="My lenevo" />
          <h5 className="text-sm">LENEVO</h5>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
