import React from 'react'
import { featuresData } from '../Data/Features'
import { useState } from 'react'

const Features = () => {

  const [press,setPress] = useState(false)

  const handpress = () =>{
    setPress(!press)
    console.log(press)
  }
  return (
    <div className='features'>
       <div className='feature-home'>
          <h1 className='feature-title'>Features Menu</h1>
       </div>
       <div className='feature-map'>{featuresData.map((el) => (
          <div className='features-all'>
              <div></div>
              <img src={el.image} alt="" className='feature-img'/>
              <h2 className='feature-name'>{el.name}</h2>
              <span className='feature-price'>€{el.price}
               </span>
              <div>
                <button className='features-button'>Commander</button>
              </div>
          </div>
       ))}</div>
    </div>
  )
}

export default Features 