import React from 'react'
import {TiSocialFacebook} from 'react-icons/ti'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'
import{FaPinterestP} from 'react-icons/fa'
import {GrYoutube} from 'react-icons/gr'
import {FiPhone} from 'react-icons/fi'
import {GoMail} from 'react-icons/go'
import Fade from 'react-reveal'
const Blog = () => {
  return (
    <div className='blog'>
        <div className='blog'>
            <h1 className='title-blog'>Our Blog</h1>
            <h2 className='titre-bog'>welcome to the blog of our pages we have, as you can see, a multitude of meals <br/>for more information go to our various social networks.</h2>
        </div>
        <div className="blog-information">
            <div className="blog-social-network">
                <Fade right><TiSocialFacebook className='facebook'/></Fade>  
                <Fade right><BsInstagram className='instagram'/></Fade> 
                <Fade right><FaLinkedinIn className='linkedin'/></Fade> 
                <Fade right><ImTwitter className='twitter'/></Fade>
                <Fade right><FaPinterestP className='pinterest'/></Fade>
                <Fade right><GrYoutube className='youtube'/></Fade>
            </div>
            <div className="blog-contact">
                <h2 className='blog-contact'>Contact us</h2>
                <p className='blog-p'>+225 0503532967 <FiPhone className='phone'/></p>
                <p className='blog-p'>Contact@skribix.com <GoMail className='mail'/></p>
            </div>
            {/* <div className="info-blog">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Nesciunt omnis pariatur laborum quae soluta. Voluptatem, dolorum facere!<br/> Quam aliquam necessitatibus officia hic itaque blanditiis velit ipsam, saepe <br/>nesciunt minima consectetur!
            </div> */}
        </div>
    </div>
  )
}

export default Blog