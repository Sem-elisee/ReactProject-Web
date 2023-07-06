import React, { useState } from 'react'
import {RxPerson} from 'react-icons/rx'
import {GoMail} from 'react-icons/go'
import {HiOutlineUsers} from 'react-icons/hi'
import {FiArrowRight} from 'react-icons/fi'
import img1 from '../Assets/contact-img/Picture (4).png'
import img2 from '../Assets/contact-img/Picture (2).png'



const Contact = () => {

    const [name,setname] =useState('')
    const [email,setemail] =useState('')
    const [calendar,setcalendar] =useState('')
    const [time,setTime] =useState('')
    const [person,setperson] =useState('')

  return (
    <div className='contact'>
        <div className="contact-input">

            <div className='input-name'>
                <input type="text" placeholder='Name'value={name} onChange={(e) => setname(e.target.value)}/>
                <RxPerson className='icon-input' />
            </div>

            <div className='input-email'>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)}/>
                <GoMail className='icon-input'/>
            </div>

            <div className='input-date'>
                <input type="date" value={calendar} onChange={(e) => setcalendar(e.target.value)}/>
            </div>

            <div className='input-time'>
                <input type="time" placeholder='Select-time' value={time} onChange={(e) => setTime(e.target.value)}/>
            </div>

            <div className='input-person'>
                <input type="text" placeholder='Person' value={person} onChange={(e) => setperson(e.target.value)}/>
                <HiOutlineUsers className='icon-input'/>
            </div>   
            <button className='input-btn'>
                Book A Table
                <FiArrowRight className='input-btn-icon'/>
            </button>
        </div>
        <div className="img">
            <img src={img1} alt="" className='input-img-1'/>
        </div>
        
    </div>
  )
}

export default Contact