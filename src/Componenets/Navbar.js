import React, { useState } from 'react'
import "../Componenets/NavbarStyles.css"
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa"

const Navbar = () => {

  const[click,setClick] = useState(false)
  const handleClick = ()=>{setClick(!click)}

  // const[color,setColor] = useState(false)
  // const changeColor = ()=>{
  //   if(window.scrollY>=100){
  //     setColor(true)
  //   }else{
  //     setColor(false)
  //   }
  // }
  // window.addEventListener('scroll',changeColor)

  return (
    // <div className={color?'Header header-bg':'header '}>
     <div className='Header'> 
        <Link className='logo' to="/">
          Ed<span className='span'>ward kara</span>ni
        </Link>
        <ul className={click?'nav-menu':'nav-menu active'}>
            <li className='nav-item'>
              <Link to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/About">About</Link>
            </li>
            <li className='nav-item'>
              <Link to="/Projects">Projects</Link>
            </li>
            <li className='nav-item'>
              <Link to="/Contact">Contact</Link>
            </li>
            <li className='nav-item'>
              <Link to="/Services">Services</Link>
            </li>
        </ul>
            <div className='humbugle' onClick={handleClick}>
                {click?<FaBars size={20} style = {{color:"#fff"}}/>:<FaTimes size={20} style = {{color:"#fff"}}/>}
                
                
            </div>

    </div>
  )
}

export default Navbar