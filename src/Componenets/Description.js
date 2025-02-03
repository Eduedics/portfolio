import React from 'react'
import '../Componenets/DescriptionStyles.css'
import { Link } from 'react-router-dom'
import myImage from '../Images/gratisography-landscape-laptop-free-stock-photo.jpg'

const Description = () => {
  return (
    <>
        <div className='hero'>
            <img className='mybg' src={myImage} alt='Backgroung-img'/>
            <div className='Desc'>
                <h1 className='Title'>FrontEnd Developer</h1>
                <p className='Description'>
                Am a versatile IT support Technician and web developer with over 1+ year of experience in delivering comprehensive technical support and creating dynamic web applications’ very Good at troubleshooting hardware, software and networking issues, ensuring minimal downtime and optimal performance. Skilled in frontend and backend web development using technologies such as HTML, CSS,Javascript,react and Django. Proven ability to improve system efficiency, enhance user experience, and provide exceptional customer service. Proficient in modern web development frameworks and tools
                </p>
                <div className='btns'>
                    <Link className='btn' to="/Projects">Projects</Link>
                    <Link className='btn success' to="/Contact">Contact</Link>
                    <Link className='btn danger' to="/Services">Services</Link>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Description