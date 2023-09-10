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
    <footer className="footer">

      <div className="column">
        
        <div className="footerlogo">
        <img src={myImage} alt="My Image" />
        </div>
        <h4>Subscribe</h4>
        <div className="search-box-foot">
            <input type="text" placeholder="Enter Your Email" />
              <button type="submit">
              <img class="arrowFoot" src={myImagesearch} alt="My Image" /> 
              </button>
       </div>
      </div> 

      
     
      <div className="column">
        <h4>Support</h4>
        <h4>Khulna, Bangladesh</h4>
        <p>exclusive@gmail.com</p>
        <p>017 6538-7467</p><br />
      </div>
      <div className="column">
        <h4>Account</h4>
        <ul>
          <li><a href="#">My Accout</a></li>
          <li><a href="#">LogIn/Register</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </div>
      <div className="column">
        <h4>Quick Link</h4>
        <ul className="quick-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="column">
        <h4>Download App</h4>
        <a href="#"><img class="qr-Foot" src={myImageqr} alt="QR Code Scanner" /> </a>
        <a href="#"><img class="play-Foot" src={myImageplay} alt="Google Play Store" /></a>
        
        <div className="social-icons">
          <a href="#"><img class="icon-Foot" src={myImagefb} alt="QR Code Scanner" /></a>
          <a href="#"><img class="icon-Foot" src={myImageinstra} alt="QR Code Scanner" /></a>
          <a href="#"><img class="icon-Foot" src={myImagetwitter} alt="QR Code Scanner" /></a>
          <a href="#"><img class="icon-Foot" src={myImagelinkdin} alt="QR Code Scanner" /></a>

        </div>
      </div>
      
      <div className="copyright">
        &copy; 2023 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
