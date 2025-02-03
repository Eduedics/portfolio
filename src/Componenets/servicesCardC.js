import React from 'react'
import './servicesStyles.css'

const services = (props) => {
  return (
    <div className='card'>
        <div className='icon'>{props.icon}</div>
        <h3 className='title'>{props.title}</h3>
        <p className='description'>{props.description}</p>
    </div>
  )
}

export default services