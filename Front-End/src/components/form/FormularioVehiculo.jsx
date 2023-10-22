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
          label='Marca del vehículo'
          name='Chevrolet'
          type='text'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Modelo del vehículo'
          name='Sunfire'
          type='text'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Capacidad del vehículo'
          name='5'
          type='number'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Aire Acondicionado'
          type='checkbox'
        />
        <Button />
      </div>
    </>

  )
}

export default FormularioVehiculo
