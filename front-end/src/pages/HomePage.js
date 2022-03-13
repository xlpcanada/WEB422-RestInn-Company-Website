import React,{useEffect} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ResortList from "../components/ResortList";
import Bestseller from '../components/Bestseller';
import ResortTypes from '../components/ResortTypes';

const HomePage = () => {


  return (
    <div className="grid" id="main-container">
        <Header/>
        <main>
          <Hero/>
          <ResortTypes />
          <Bestseller />
        </main>
        <Footer/>

    </div>
  )
}

export default HomePage