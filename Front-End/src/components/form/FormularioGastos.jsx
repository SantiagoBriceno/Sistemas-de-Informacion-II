import React from 'react'
import Input from './components/Input'
import Button from './components/Button'
import './formulario.css'

const FormularioVehiculo = () => {
  return (
    <>
      <div className='container'>
        <h1>Formulario de vehículo</h1>
        <br />
        <Input
          label='Placa del vehículo'
          name='ABC-123'
          type='text'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Fecha de Realización'
          name='01/01/2021'
          type='date'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Descripción'
          name='Sunfire'
          type='text'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Costo'
          name='1.540 BsS'
          type='number'
          error='Ingrese un valor válido, por favor'
        />
        <Button />
      </div>
    </>

  )
}

export default FormularioVehiculo
