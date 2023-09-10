import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Contact from "./Page/Contact";
import Home from './Page/Home';
import SignUp from './Page/SignUp';
import LogIn from './Page/LogIn';
import Product from './Page/Products_Page';
import Smartphone from './Page/SmartPhone';
import Laptop from './Page/Laptop_page';
import Headphones from './Page/HeadPhone';


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="/Sign-up" element={<SignUp />} />
            <Route path="/Login" element={<LogIn />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/smartphone" element={<Smartphone />} />
            <Route path="/product/computer" element={<Laptop />} />
            <Route path="/product/headphone" element={<Headphones />} />

        </Routes>
    </Router>
  )
}

export default App