import React, { useState } from 'react'
import { foodIcons } from '../Data/allData'
import SliderItem from './SliderItem'

const ManyFood = () => {
  
  // const [visible, setVisible] = useState(false)
  
  const [item, setItem] = useState(1)

  const showEl = (id) =>{
    setItem(id)
    // setVisible(!visible)
    console.log(id)
  }
  
  return (
    <>
    <div className='ManyFood'>
         <ul className='Food'>
            {foodIcons.map((item) =>(
            <div
                style={{textDecoration: "none", listStyleType:"none", cursor: "pointer"}}
                key={item.id}
                  onClick={() => showEl(item.id)}
              >
                <li className='li1'>
                    <div className='tout'>
                        <div className='manyfood-icon'>
                            {item.icon}
                        </div>
                        <div className='manyfood-nom'>{item.name}</div>
                    </div>   
                </li>
            </div>
            ))}
         </ul>
    </div>
      <SliderItem item={item}/>
    </>
  )
}

export default ManyFood;