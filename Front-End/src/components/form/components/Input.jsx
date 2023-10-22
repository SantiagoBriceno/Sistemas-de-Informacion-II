import React from 'react'
import './css/input.css'

const Input = ({ label, type, name, error, value, event, id }) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input
        id={id}
        className='form-control'
        type={type}
        placeholder={name}
        value={value}
        onChange={event}
      />
      {error === true ? <p className='text-red-500 text-xs italic'>'Por favor ingresa valores válidos'</p> : null}
    </div>
  )
}

export default Input
