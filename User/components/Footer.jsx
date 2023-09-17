import React from 'react';
import myImage from '../image/footerlogo.png';
import myImagesearch from '../image/arro.png';
import myImageqr from '../image/qr-code.png';
import myImageplay from '../image/play.png';
import myImagefb from '../image/fb.png';
import myImageinstra from '../image/instra.png';
import myImagetwitter from '../image/twitt.png';
import myImagelinkdin from '../image/linkdin.png';

function Footer() {
  return (
    <footer className="bg-black text-white p-5 flex flex-wrap justify-between">

      <div className="w-1/5">
        <div className="footerlogo">
          <img src={myImage} alt="My Image" className="h-20 w-32" />
        </div>
        <h4>Subscribe</h4>
        <div className="search-box-foot flex items-center max-w-200 bg-gray-900 border-2 border-gray-300 rounded p-2">
          <input type="text" placeholder="Enter Your Email" className="w-full bg-gray-900 border-none" />
          <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded-r cursor-pointer">
            <img className="arrowFoot h-5 w-5" src={myImagesearch} alt="My foot" />
          </button>
        </div>
      </div>

      <div className="w-1/5">
        <h4>Support</h4>
        <h4 className="address">Khulna, Bangladesh</h4>
        <p>exclusive@gmail.com</p>
        <p>017 6538-7467</p><br />
      </div>

      <div className="w-1/5">
        <h4>Account</h4>
        <ul>
          <li><a href="#" className="text-white">My Account</a></li>
          <li><a href="#" className="text-white">Log In/Register</a></li>
          <li><a href="#" className="text-white">Cart</a></li>
          <li><a href="#" className="text-white">Wishlist</a></li>
          <li><a href="#" className="text-white">Shop</a></li>
        </ul>
      </div>

      <div className="w-1/5">
        <h4>Quick Link</h4>
        <ul className="quick-links">
          <li><a href="#" className="text-white">Privacy Policy</a></li>
          <li><a href="#" className="text-white">Terms of Use</a></li>
          <li><a href="#" className="text-white">FAQ</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
        </ul>
      </div>

      <div className="w-1/5">
      <h4 className='pb-5'>Download App</h4>
        <div className="download flex mb-15">
        <a href="#"><img className="qr-Foot h-32 w-32" src={myImageqr} alt="QR Code Scanner" /></a>
        <a href="#"><img className="play-Foot h-32 w-32" src={myImageplay} alt="Google Play Store" /></a>
        </div>

        <div className="social-icons flex mt-15 pt-10">
          <a href="#"><img className="icon-Foot h-5 w-5 mr-7" src={myImagefb} alt="QR Fb" /></a>
          <a href="#"><img className="icon-Foot h-5 w-5 mr-7" src={myImageinstra} alt="QR instra" /></a>
          <a href="#"><img className="icon-Foot h-5 w-5 mr-7" src={myImagetwitter} alt="QR twitt" /></a>
          <a href="#"><img className="icon-Foot h-5 w-5 mr-7" src={myImagelinkdin} alt="QR Code" /></a>
        </div>
      </div>

      <div className="w-full mt-5 border-t border-gray-200 text-center">
        &copy; 2023 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
