import React from 'react'
import Input from '../form/Input'
import Button from '../form/Button'
import './formulario.css'

const FormularioConductor = () => {
  return (
    <>
      <div className='container'>
        <h1>Formulario de conductor</h1>
        <br />
        <Input
          label='Nombre y Apellido'
          name='César Andrés Pausín Ospino'
          type='text'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Cédula de identidad'
          name='28402367'
          type='number'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Edad actual'
          name='22'
          type='number'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Número de teléfono'
          name='0424-1234567'
          type='number'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Sueldo semanal'
          name='1.540 BsS'
          type='number'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Disponibilidad'
          type='checkbox'
        />
        <Button />
      </div>
    </>

  )
}

export default FormularioConductor
