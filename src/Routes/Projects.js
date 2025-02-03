import React, { Component } from 'react'

import Navbar from "../Componenets/Navbar.js"
import DescriptionImg from "../Componenets/DescriptionImg.js"
import Footer from "../Componenets/footer.js"

import Project from '../Componenets/project.js'

export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DescriptionImg header = "Projects" text="Hear are my latest projects"/>
        <Project />
        <Footer />
      </div>
    )
  }
}

export default About