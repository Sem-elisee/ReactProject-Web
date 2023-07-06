import React from 'react'
import ManyFood from './ManyFood'
import May from './May'
const Home = () => {
  return (
    <>
      <div className='home'>
          <button className='home-btn'>alway tasty food</button>
          <h1 className='home-title'>Special Offer</h1>
          <div className="home-page">
              <p>Lorem ipsum dolor sit, amet voluptatem consequuntur, illum eaque, harum corporis minus dignissimos dolor?</p>
              <p> adipisicing elit. Consectetur ipsam itaque, similique minima odit inventore. Aliquam incidunt</p>
              <p>consectetur quae quia dolorem qui sequi voluptates, </p>
          </div>
          <button className='home-btn-btn'>ORDER NOW</button>
      </div>
      <May/>
      <ManyFood/>
    </>

  )
}

export default Home