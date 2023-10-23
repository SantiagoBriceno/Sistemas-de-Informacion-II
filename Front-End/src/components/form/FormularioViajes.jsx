import React from 'react'
import Input from './components/Input'
import Button from './components/Button'
import './formulario.css'

import { useSearchViajes } from '../../hooks/formularios/useSearchViajes.js'

const FormularioViajes = () => {
  const { viaje, setViaje, error, handleSubmit } = useSearchViajes()
  console.log(viaje)
  const handleChange = (e) => {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setViaje({
      ...viaje,
      [e.target.id]: newValue
    })
  }
  return (
    <>
      <div className='container'>
        <h1>Formulario de viaje</h1>
        <br />
        <Input
          id='placaVehiculo'
          label='Identificador del viaje'
          name='123456'
          type='number'
          error={error.placaVehiculo}
          value={viaje.placaVehiculo}
          event={handleChange}
        />
        <Input
          id='fechaInicio'
          label='Fecha de Inicio'
          name='01/01/2021'
          type='date'
          error={error.fechaInicio}
          value={viaje.fechaInicio}
          event={handleChange}
        />
        <Input
          id='fechaFin'
          label='Fecha de Finalizacion'
          name='01/03/2021'
          type='date'
          error={error.fechaFin}
          value={viaje.fechaFin}
          event={handleChange}
        />
        <Input
          id='ubicacion'
          label='Ubicación'
          name='Mañongo, Naguanagua'
          type='text'
          error={error.ubicacion}
          value={viaje.ubicacion}
          event={handleChange}
        />
        <Input
          id='distancia'
          label='Distancia recorrida en el viaje'
          name='1.324 Km'
          type='number'
          error={error.distancia}
          value={viaje.distancia}
          event={handleChange}
        />
        <Input
          id='costo'
          label='Costo del viaje'
          name='1.540 BsS'
          type='number'
          error={error.costo}
          value={viaje.costo}
          event={handleChange}

        />
        <Button onSubmit={handleSubmit} />
      </div>
    </>

  )
}

export default FormularioViajes
