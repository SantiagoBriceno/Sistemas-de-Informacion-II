import React from 'react'
import './css/input.css'

const Input = ({ label, type, name, error, value, onChange, onBlur, id, options }) => {
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
            onChange={onChange}
            onBlur={onBlur}
          />
        : <select
            id={id}
            className='form-control'
            onChange={onChange}
            onBlur={onBlur}
          >
          {options.map((option) => <option key={option} value={option}>{option}</option>)}
          <option defaultValue={name} disabled>{name}</option>
        </select>}

      {error !== '' ? <p className='text-red-500 text-xs italic'>{error}</p> : null}
    </div>
  )
}

export default Input
