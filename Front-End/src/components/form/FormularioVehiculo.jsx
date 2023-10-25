import React from 'react'
import Input from './components/Input'
import Button from './components/Button'
import './formulario.css'

import { useSearchVehiculos } from '../../hooks/formularios/useSearchVehiculos.js'

const FormularioVehiculo = () => {
  const { cedula, error, formData, handleBlur, handleChange, onSubmit } = useSearchVehiculos()

  return (
    <>
      <div className='container'>
        <h1>Formulario de vehículo</h1>
        <br />
        <Input
          id='placa'
          label='Placa del vehículo'
          name='ABC-123'
          type='text'
          error={error.placa}
          value={formData.placa}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='marca'
          label='Marca del vehículo'
          name='Chevrolet'
          type='text'
          error={error.marca}
          value={formData.marca}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='modelo'
          label='Modelo del vehículo'
          name='Sunfire'
          type='text'
          error={error.modelo}
          value={formData.modelo}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='capacidad'
          label='Capacidad del vehículo'
          name='5'
          type='number'
          error={error.capacidad}
          value={formData.capacidad}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='disponibilidad'
          label='¿Se encuentra disponible?'
          type='checkbox'
          value={formData.disponibilidad}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='aire'
          label='¿Posee aire acondicionado?'
          type='checkbox'
          value={formData.aire}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='cedulaConductor'
          label='Cédula de identidad'
          name='9000000'
          type='select'
          options={cedula}
          error={error.cedulaConductor}
          value={formData.cedulaConductor}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button onSubmit={onSubmit} />
      </div>
    </>

  )
}

export default FormularioVehiculo
