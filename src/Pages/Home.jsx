import React from 'react'
import Slider from '../Components/Slider'
import HomeBottomContainer from '../Components/HomeBottomContainer'

const Home = () => {
  return (
    <div className='bg-[#000201] h-screen'>
      <div className="slider">
        <Slider />
      </div>
      <div className=" bottom-container-home">
        <HomeBottomContainer />
      </div>
    </div>
  )
}

export default Home
