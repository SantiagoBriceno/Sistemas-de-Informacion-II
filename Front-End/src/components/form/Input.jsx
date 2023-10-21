import React from 'react'
import './css/input.css'

const Input = ({ label, type, name, error, value }) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input
        className='form-control'
        type={type}
        placeholder={name}
        value={value}
      />
      {error && <p className='text-red-500 text-xs italic'>{error}</p>}
    </div>
  )
}

export default Input
