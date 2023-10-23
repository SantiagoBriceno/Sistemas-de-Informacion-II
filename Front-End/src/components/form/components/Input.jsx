import React from 'react'
import './css/input.css'

const Input = ({ label, type, name, error, value, event, id, options }) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      {type !== 'select'
        ? <input
            id={id}
            className='form-control'
            type={type}
            placeholder={name}
            value={value}
            onChange={event}
          />
        : <select
            id={id}
            className='form-control'
            onChange={event}
          >
          {options.map((option) => <option key={option} value={option}>{option}</option>)}
          <option selected disabled>{name}</option>
          </select>}

      {error === true ? <p className='text-red-500 text-xs italic'>'Por favor ingresa valores válidos'</p> : null}
    </div>
  )
}

export default Input
