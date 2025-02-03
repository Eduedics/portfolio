import './FormSyles.css'
import React from 'react'


const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>

            <label>Email</label>
            <input type='Email'></input>

            <label>Message</label>
            <textarea rows='6' placeholder='Message goes here'></textarea>

            <button type='submit' className='btn'>submit</button>
        </form>
    </div>
  )
}

export default Form