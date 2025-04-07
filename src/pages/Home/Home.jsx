import React from 'react'
import Lottie from "lottie-react";
import jobAnimation from "../../assets/lotteiFiles/Animation - 1743705276586.json"
import Banner from './banner/Banner';
import HotJobs from './hotJobs/HotJobs';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Lottie className='w-96 justify-center items-center' animationData={jobAnimation}></Lottie>
      <HotJobs></HotJobs>
    </div>
  )
}

export default Home
