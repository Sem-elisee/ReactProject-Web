import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {IoClose} from 'react-icons/io5'
import { deleteItem } from '../Toolkit/Slice'


const Header = () => {
  const cart = useSelector((state) => state.carts.cart)
  const dispatch = useDispatch()
  // console.log(cart)
  
  const [show, setShow] = useState(false)
  const Dell = () =>{
    setShow(true)
  }
  const handEnlv = () => {
      setShow(false)
  }


  return (
    <div className='Header'>
        <ul>
          <NavLink to="/" style={{textDecoration: "none"}}>
            <li>Add to card</li>
          </NavLink>
          <NavLink to="/" style={{textDecoration: "none"}}>
            <li>Home</li>
          </NavLink>
        </ul>

        <main className='cart'>
          <FaShoppingCart onClick={() => Dell()}/>
          <div className='count'>{cart.length}</div>
          {show && 
            <div className='box'> 
            <div className="cl" onClick={handEnlv}><IoClose/></div>
              <div className='box-flex'> 
              <div>
                <div className='haut'>
                    <h2 className='first'>Photo</h2>
                    <h2 className='second'>Restaurant Name</h2>
                </div>
              </div>

              
                  {cart.map(item =>(
                    <div className='elmt' key={item.id}>
                        <img src={item.imgdata} className='photo' alt="" />
                        <p className='nam'>{item.rname}</p>
                        <p className='prix'>Price: ₹{item.price}</p>
                        <p className='quant'>Quantity: {item.qnty}</p>
                        <button onClick={() => dispatch(deleteItem(item.id))}>delete</button>
                    </div>
                  )) }
                  
              </div>
              <p className='text01'>Total :₹300</p>
            </div>
          }
          
        </main>
    </div> 
  )
}

export default Header