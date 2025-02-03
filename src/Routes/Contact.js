import React, { Component } from 'react'

import Navbar from "../Componenets/Navbar.js"
import DescriptionImg from "../Componenets/DescriptionImg.js"
import Footer from "../Componenets/footer.js"
import Form from '../Componenets/Form.js'

export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DescriptionImg header="Contact Me" text = "Reach me out for any tech solutions."/>
        <Form />
        <Footer />
      </div>
    )
  }
}

export default About