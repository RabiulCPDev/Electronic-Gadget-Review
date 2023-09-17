import React from 'react';
import myImagepn from '../image/mobile.png';
import myImagec from '../image/computer.jpg';
import myImagehpn from '../image/headphone.png';
import myImagesw from '../image/smartwatch.png';
import myImagegm from '../image/gaming.png';

const Category = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Browse By Category</h1>
      <div className="flex justify-between items-center p-5 bg-white">
        <div className="category-phone shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12 mr-5">
          <a href="http://localhost:3000/product/smartphone" className="text-center block p-4">
            <img className="w-10 h-10 mx-auto mb-2" src={myImagepn} alt="Icon_Phone" />
            <h5 className="text-sm">PHONE</h5>
          </a>
        </div>

        <div className="category-computer shadow-2xl flex-grow border-solid border-1 border-stone-600 p-12 mr-5">
          <a href="http://localhost:3000/product/computer" className="text-center block p-4">
            <img className="w-10 h-10 mx-auto mb-2" src={myImagec} alt="My_computer" />
            <h5 className="text-sm">COMPUTER</h5>
          </a>
        </div>

        <div className="category-headphone shadow-2xl flex-grow border-solid border-1 border-stone-600 p-12 mr-5">
          <a href="http://localhost:3000/product/headphone" className="text-center block p-4">
            <img className="w-10 h-10 mx-auto mb-2" src={myImagehpn} alt="My Headphone" />
            <h5 className="text-sm">HEADPHONE</h5>
          </a>
        </div>

        <div className="category-camera shadow-2xl flex-grow border-solid border-1 border-stone-600 p-12 mr-5">
          <a href="http://localhost:3000/product/camera" className="text-center block p-4">
            <img className="w-10 h-10 mx-auto mb-2" src={myImagehpn} alt="My Camera" />
            <h5 className="text-sm">CAMERA</h5>
          </a>
        </div>

        <div className="category-smartwatch shadow-2xl flex-grow border-solid border-1 border-stone-600 p-12 mr-5">
          <a href="http://localhost:3000/product/smartwatch" className="text-center block p-4">
            <img className="w-10 h-10 mx-auto mb-2" src={myImagesw} alt="MySmartwatch" />
            <h5 className="text-sm">SMARTWATCH</h5>
          </a>
        </div>

        <div className="category-gaming shadow-2xl flex-grow border-solid border-1 border-stone-600 p-12">
          <a href="http://localhost:3000/product/gaming" className="text-center block p-4">
            <img className="w-10 h-10 mx-auto mb-2" src={myImagegm} alt="My Gaming" />
            <h5 className="text-sm">GAMING</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
