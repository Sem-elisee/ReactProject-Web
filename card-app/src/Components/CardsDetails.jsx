import React, { useState } from 'react'
import {IoMdTrash }from "react-icons/io"


const CardsDetails = () => {
    const [data, setData] = useState([])
    // console.log(data);

  return (
    <div className='container'>
        <h2 className='card-name'>Items Details Page</h2>
        <section className='contain'>
            <div className="itemsdetails">
                <div className="items_img">
                    <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" className='Pict' alt="" />
                </div>
                <div className="details">
                    <table>
                        <tbody className='bob'>
                            <tr className='rest'>
                                <td> <strong>Restaurant</strong> : Massala Theoryy</td>
                                <td> <strong>Price</strong> : ₹ 300</td>
                                <td> <strong>Dishes</strong>:  North Indian, Biryani, Mughlai</td>
                                <td> <strong>Total</strong> : ₹ 300 </td>
                            </tr>
                            <tr className='tables'>
                                <td><strong>Rating </strong> : <span className='note'> 3.5★</span></td>
                                <td><strong>Order Review </strong> : <span>1175 + order placed from here recently</span></td>
                                <td><strong>Remove </strong>: <span className='trash'><IoMdTrash/></span></td> 
                            </tr>
                        </tbody>
                        
                    </table>
                    {}
                </div>
            </div>
        </section>
    </div>
  )
}

export default CardsDetails