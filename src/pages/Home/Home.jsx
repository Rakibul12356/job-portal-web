import React from 'react'
import Lottie from "lottie-react";
import jobAnimation from "../../assets/lotteiFiles/Animation - 1743705276586.json"
import Banner from './banner/Banner';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Lottie animationData={jobAnimation}></Lottie>
    </div>
  )
}

export default Home
