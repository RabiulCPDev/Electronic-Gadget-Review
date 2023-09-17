import React from 'react'
import myImageapple from '../image/new/apple.jpg';
import myImagesamsung from '../image/new/samsung.jpg';
import myImageoppo from '../image/new/oppo.jpg';
import myImagevivo from '../image/new/vivo.png';
import myImagemi from '../image/new/xiaomi.jpg';
import myImagesy from '../image/new/symphony.jpg';

const Smartphone = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">SmartPhones Category</h1>
      <div className="flex justify-between items-center p-5 bg-white">
        <div className="category-apple shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12 mr-5">
          <img className="w-10 h-10 mx-auto mb-2" src={myImageapple} alt="My Image" />
          <h5 className="text-sm">APPLE</h5>
        </div>
        <div className="category-samsung shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12 mr-5">
          <img className="w-10 h-10 mx-auto mb-2" src={myImagesamsung} alt="My Image" />
          <h5 className="text-sm">SAMSUNG</h5>
        </div>
        <div className="category-oppo shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12 mr-5">
          <img className="w-10 h-10 mx-auto mb-2" src={myImageoppo} alt="My Image" />
          <h5 className="text-sm">OPPO</h5>
        </div>
        <div className="category-vivo shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12 mr-5">
          <img className="w-10 h-10 mx-auto mb-2" src={myImagevivo} alt="My Image" />
          <h5 className="text-sm">VIVO</h5>
        </div>
        <div className="category-xiomi shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12 mr-5">
          <img className="w-10 h-10 mx-auto mb-2" src={myImagemi} alt="My Image" />
          <h5 className="text-sm">XIOMI</h5>
        </div>
        <div className="category-symphony shadow-2xl flex-grow border-solid border-1 border-slate-800 p-12">
          <img className="w-10 h-10 mx-auto mb-2" src={myImagesy} alt="My Image" />
          <h5 className="text-sm">SYMPHONY</h5>
        </div>
      </div>
    </div>
  )
}

export default Smartphone;
