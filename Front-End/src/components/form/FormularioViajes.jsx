import React from 'react'
import Input from './components/Input'
import Button from './components/Button'
import './formulario.css'

import { useSearchViajes } from '../../hooks/formularios/useSearchViajes.js'

const FormularioViajes = () => {
  const { viaje, setViajes, error, handleSubmit } = useSearchViajes()
  console.log(viaje.fecha)
  const handleChange = (e) => {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setViajes({
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
          id='id'
          label='Identificador del viaje'
          name='123456'
          type='number'
          error={error.id}
          value={viaje.id}
          onChange={handleChange}
        />
        <Input
          label='Fecha de Inicio'
          name='01/01/2021'
          type='date'
          error={error.fechaInicio}
          value={viaje.fechaInicio}
          onChange={handleChange}
        />
        <Input
          label='Fecha de Finalizacion'
          name='01/03/2021'
          type='date'
          error={error.fechaFin}
          value={viaje.fechaFin}
          onChange={handleChange}
        />
        <Input
          label='Ubicación'
          name='Mañongo, Naguanagua'
          type='text'
          error={error.ubicacion}
          value={viaje.ubicacion}
          onChange={handleChange}
        />
        <Input
          label='Distancia recorrida en el viaje'
          name='1.324 Km'
          type='number'
          error={error.distancia}
          value={viaje.distancia}
          onChange={handleChange}
        />
        <Input
          label='Costo del viaje'
          name='1.540 BsS'
          type='number'
          error={error.costo}
          value={viaje.costo}
          onChange={handleChange}

        />
        <Button onSubmit={handleSubmit} />
      </div>
    </>

  )
}

export default FormularioViajes
