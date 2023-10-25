import React from 'react'
import './css/button.css'

const Button = ({ onSubmit, editMode }) => {
  return (
    editMode
      ? <button className='button-56' onClick={onSubmit}>Guardar Los cambios</button>
      : <button className='button-56' onClick={onSubmit}>Enviar</button>
  )
}

export default Button
