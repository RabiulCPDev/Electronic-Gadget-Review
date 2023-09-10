import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sliders from '../components/Sliders';
import Category from '../components/Category';
import '../index.css'


const Home = () => {
  return (
    <>
    <Header />
    <Sliders />
    <Category />
    <Footer />
    </>
  )
}

export default Home
