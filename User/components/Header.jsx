import React from 'react'
import myImage from '../image/logo.jpg';
import myImages from '../image/wish.png';
import myImagecart from '../image/cart.jpg';
import myImagesearch from '../image/search.png';
const Header = () => {
  return (
    <header className='bg-white text-black flex justify-between items-center py-2 px-4 border-b border-gray-300'>
        <div className="logo">
            
            <img className='w-24 h-auto ml-14' src={myImage} alt="My Image" />
        </div>
        <nav>
            <ul className='flex'>
                <li className='mr-4'><a className='text-black no-underline' href="http://localhost:3000/">Home</a></li>
                <li className='mr-4'><a className='text-black no-underline' href="#">Contact</a></li>
                <li className='mr-4'><a className='text-black no-underline' href="#">About</a></li>
                <li className='mr-4'><a className='text-black no-underline' href="http://localhost:3000/Sign-up">Sign Up</a></li>
            </ul>
        </nav>

        <div className="search-box max-w-xs bg-white border border-gray-300 rounded flex items-center px-2">
            <input type="text" className='flex-grow border-none px-2 rounded focus:outline-none' placeholder="What are you looking for ?" />
              <button className='bg-white border-none text-white px-4 py-2 rounded-r cursor-pointer' type="submit">
              <img className="searchBox w-4 h-4 fill-current text-black" src={myImagesearch} alt="My search" /> 
              </button>
       </div>

       <div className="icons flex">
            <a href="#" className="wishlist-icon text-white ml-4"><img class="wishicon w-10 h-10 fill-current" src={myImages} alt="My wish" /></a>
            <a href="#" className="cart-icon text-white ml-4"><img class="carticon w-10 h-10 fill-current" src={myImagecart} alt="My cart" /></a>
        </div>
    </header>
  )
}

export default Header;