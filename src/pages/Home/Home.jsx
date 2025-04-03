import React from 'react'
import Lottie from "lottie-react";
import jobAnimation from "../../assets/lotteiFiles/Animation - 1743705276586.json"
const Home = () => {
  return (
    <div>
      <h2>This is Home</h2>
      <Lottie animationData={jobAnimation}></Lottie>
    </div>
  )
}

export default Home
