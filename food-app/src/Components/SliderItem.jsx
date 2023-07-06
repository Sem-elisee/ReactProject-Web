import React from 'react';

import { BurgerData } from '../Data/BurgerData';
import { PizzaData } from '../Data/PizzaData';
import {VegetarianData} from '../Data/VegetarianData'
import {DessertsData} from '../Data/DessertsData'
import {SolfDrinksData} from '../Data/SolfDrinksData'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../Style/Style.css"

import '../Style/Slide.css'

function SliderItem({visible, item}) {

   return (
       
        <div className='route1'>
             
            {item === 1 && <Swiper slidesPerView={3}
            spaceBetween={30} 
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}>
                
            <div>{BurgerData.map((element) =>(
                <SwiperSlide>
            <div className="Toi">
                    <div className='part2'>
                        <img src={element.image} alt="" className='Burger'/>
                        <div className='el1'>
                            <h2 className='NomBurger'>{element.name}</h2>
                            <span className='prixBurger'>€ {element.price}</span>
                            
                        </div>
                    </div>
                    <div className="buttn">
                        <button className='butt3'>Commander</button>
                    </div>
                    
            </div>
                </SwiperSlide>
                
            ))}
            </div>
            
        </Swiper>}

            {item === 2 && <Swiper slidesPerView={3}
            spaceBetween={30} 
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}>
                
            <div>{PizzaData.map((element) =>(
                <SwiperSlide>
                    <div className='part2'>
                        <img src={element.image} alt="" className='Pizza'/>
                        <div className='el1'>
                            <h2 className='NomPizza'>{element.name}</h2>
                            <span className='prixPizza'>€ {element.price}</span>
                        </div>
                    </div>
                    <div className="buttn">
                    <button className='butt3'>Commander</button>
                    </div>
                </SwiperSlide>
            ))}
            </div>
            </Swiper>}


            
            {item === 3 && <Swiper slidesPerView={3} 
            spaceBetween={30} 
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}>
                
            <div>{VegetarianData.map((element) =>(
                <SwiperSlide>
                    <div className='part2'>
                        <img src={element.image} alt="" className='Burger'/>
                        <div className='el1'>
                            <h2 className='NomVegetarian'>{element.name}</h2>
                            <span className='prixVegetarian'>€ {element.price}</span>
                        </div>
                    </div>
                    <div className="buttn">
                    <button className='butt3'>Commander</button>
                    </div>
                </SwiperSlide>
            ))}
            </div>
            </Swiper>}

            {item === 4 && <Swiper slidesPerView={3}
            spaceBetween={30} 
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}>
                
            <div>{SolfDrinksData.map((element) =>(
                <SwiperSlide>
                    <div className='part2'>
                        <img src={element.image} alt="" className='Burger'/>
                        <div className='el1'>
                            <h2 className='NomDrink'>{element.name}</h2>
                            <span className='prixDrink'>€ {element.price}</span>
                        </div>
                    </div>
                    <div className="buttn">
                    <button className='butt3'>Commander</button>
                    </div>
                </SwiperSlide>
            ))}
            </div>
            </Swiper>}

            { item === 5 && <Swiper slidesPerView={3}
            spaceBetween={30} 
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}>
                
            <div>{DessertsData.map((element) =>(
                <SwiperSlide>
                    <div className='part2'>
                        <img src={element.image} alt="" className='Burger'/>
                        <div className='el1'>
                            <h2 className='NomDessert'>{element.name}</h2>
                            <span className='prixDessert'>€ {element.price}</span>
                        </div>
                    </div>
                    <div className="buttn">
                    <button className='butt3'>Commander</button>
                    </div>
                </SwiperSlide>
            ))}
            </div>
            </Swiper>}
    </div>
    );
}

export default SliderItem;