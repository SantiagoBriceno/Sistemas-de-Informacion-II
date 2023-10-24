import React from 'react'
import Input from './components/Input'
import Button from './components/Button'
import './formulario.css'

import { useSearchVehiculos } from '../../hooks/formularios/useSearchVehiculos.js'

const FormularioVehiculo = () => {
  const { vehiculo, setVehiculo, error, handleSubmit } = useSearchVehiculos()
  const handleChange = (e) => {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setVehiculo({
      ...vehiculo,
      [e.target.id]: newValue
    })
  }
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
          value={vehiculo.placa}
          event={handleChange}
        />
        <Input
          id='marca'
          label='Marca del vehículo'
          name='Chevrolet'
          type='text'
          error={error.marca}
          value={vehiculo.marca}
          event={handleChange}
        />
        <Input
          label='Modelo del vehículo'
          name='Sunfire'
          type='text'
          error={error.modelo}
          value={vehiculo.modelo}
          event={handleChange}
        />
        <Input
          label='Capacidad del vehículo'
          name='5'
          type='number'
          error={error.capacidad}
          value={vehiculo.capacidad}
          event={handleChange}
        />
        <Input
          id='disponibilidad'
          label='¿Se encuentra disponible?'
          type='checkbox'
          value={vehiculo.disponibilidad}
          event={handleChange}
        />
        <Input
          id='aire'
          label='¿Posee aire acondicionado?'
          type='checkbox'
          value={vehiculo.aire}
          event={handleChange}
        />
        <Input
          id='cedulaConductor'
          label='Cédula de identidad'
          name='28402367'
          type='number'
          error={error.cedulaConductor}
          value={vehiculo.cedulaConductor}
          event={handleChange}
        />
        <Button onSubmit={handleSubmit} />
      </div>
    </>

  )
}

export default FormularioVehiculo
