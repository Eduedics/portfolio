import React from 'react'

import '../Componenets/footerStyles.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const footer = () => {
  return (

    <div className='footer'>
        <div className='footer-container'>
            <div className='first-container'>
                <div className='location'>
                    
                        <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                    
                    <div>
                        <p> 15 Kerugoya</p>
                        <p>Nairobi</p>
                    </div>
                </div>

                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>+(254)793 967 349
                    </h4>
                </div>

                <div className='Email'>
                    <h4>
                        <FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/><a href='mailto:kemuthii@gmail.com'>kemuthii@gmail.com</a>
                    </h4>
                </div>

            </div>

        <div className='SecondContainer'>
            <h4>More</h4>
            <p>check out My <Link to='/Services' >Services</Link></p>
            <div className='social'>
                <FaFacebook size={20} style={{color:'#fff',marginRight:'2rem'}}/>

                <FaTwitter size={20} style={{color:'#fff',marginRight:'2rem'}}/>

                <FaLinkedin size={20} style={{color:'#fff',marginRight:'2rem'}}/>
            </div>
        </div>
        
        </div>
    </div>
    
  )
}

export default footer