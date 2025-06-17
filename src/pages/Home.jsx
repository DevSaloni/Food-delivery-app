import React from 'react'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import MakingProduct from "../component/MakingProduct";
import DeliveryBookPanel from "../component/DeliveryBookPanel";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <div>
       <Navbar/>
       <HeroSection/>
       <MakingProduct/>
       <DeliveryBookPanel/>
       <Footer/>
    </div>

  )
}

export default Home