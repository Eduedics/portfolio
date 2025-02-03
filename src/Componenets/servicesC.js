import React from 'react'
import './servicesStyles.css'
import servicesCardData from './servicesCardDataC.js'
import Servicescard from './servicesCardC.js'

const services = () => {
  return (
    <div className='container'>
        <h2 className='heading'>My services</h2>
        <div className='serviceslist'>
            {servicesCardData.map((value,index) => {
                return(
                    <Servicescard 
                    key ={index}
                    icon = {value.icon}
                    title = {value.title}
                    description = {value.description}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default services