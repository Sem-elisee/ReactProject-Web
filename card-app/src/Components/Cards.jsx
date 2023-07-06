import { useDispatch } from 'react-redux';
import {  addcart } from '../Toolkit/Slice';
import CardsData from "./CardsData"

const Cards = () => {
  
  const dispatch = useDispatch()
  // console.log(CardsData);


   
  return (
    <div className='card'>
      <h2 className='card-name'>Add to cart Projects</h2>
        <div className="row" >
              {CardsData.map((element, id) =>(
               <div className="cow" key={id}>
                    <img src={element.imgdata} className="img" alt="" />
                    <p className='article'>
                      <h1>{element.rname}</h1>
                      price: ₹{element.price}
                    </p>
                    <div className="buttons">
                     {/* <button onClick={dispatch(addcard(element))}>Add to Cart</button> */}
                     <button 
                     onClick={()=> dispatch(addcart(element))}
                     >Add to Cart</button>
                </div>
               </div>              
               ))}
          {}
        </div>
    </div> 
  )
}

export default Cards