import React, { Component } from 'react'

import Navbar from "../Componenets/Navbar.js"
import DescriptionImg from "../Componenets/DescriptionImg.js"
import Footer from "../Componenets/footer.js"
import Services from '../Componenets/servicesC.js'

export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        
        <DescriptionImg header="My Services" text = "tech solutions at your home well delivered."/>
        <Services />
        <Footer />
      </div>
    )
  }
}

export default About