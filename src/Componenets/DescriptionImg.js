import React, { Component } from 'react'
import './DescriptioImgStyles.css'

export class DescriptionImg extends Component {
  render() {
    return (
        <div className='Description'>
            <div className='Hero'>
                <h1>{this.props.header}</h1>
                <p>{this.props.text}</p>
            </div>

        </div>
    )
  }
}

export default DescriptionImg