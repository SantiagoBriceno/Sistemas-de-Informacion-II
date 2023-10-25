import React from 'react'
import './css/button.css'

const Button = ({ onSubmit, text }) => {
  return (
    <button className='button-56' onClick={onSubmit}>{text}</button>
  )
}

export default Button
