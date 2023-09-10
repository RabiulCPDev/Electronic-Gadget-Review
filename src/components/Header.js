import React from 'react'
import myImage from '../pages/logo.jpg';
import myImages from '../image/wish.png';
import myImagecart from '../image/cart.jpg';
import myImagesearch from '../image/search.png';
const Header = () => {
  return (
    <header>
        <div class="logo">
            
            <img src={myImage} alt="My Image" />
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
        </nav>

        <div className="search-box">
            <input type="text" placeholder="What are you looking for ?" />
              <button type="submit">
              <img class="searchBox" src={myImagesearch} alt="My Image" /> 
              </button>
       </div>

        <div class="icons">
            <a href="#" class="wishlist-icon"><img class="wishicon" src={myImages} alt="My Image" /></a>
            <a href="#" class="cart-icon"><img class="carticon" src={myImagecart} alt="My Image" /></a>
        </div>
    </header>
  )
}

export default Header;