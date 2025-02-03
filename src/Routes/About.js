import React, { Component } from 'react'

import Navbar from "../Componenets/Navbar.js"
import DescriptionImg from "../Componenets/DescriptionImg.js"
import Footer from "../Componenets/footer.js"
import AboutMe from '../Componenets/AboutMe.js'

export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DescriptionImg header="ABOUT" text = "Reliable, productive and thus a trustworthy personnel promoting diligence and upholding integrity in my profession."/>
        <AboutMe />
        <Footer />
      </div>
    )
  }
}

export default About