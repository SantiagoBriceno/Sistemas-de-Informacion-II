import React, { useEffect } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import './formulario.css'

import { useSearchViajes } from '../../hooks/formularios/useSearchViajes.js'

const FormularioViajes = ({ editMode, setEditMode, editData }) => {
  const { placas, error, formData, handleBlur, handleChange, onSubmit, setFormField } = useSearchViajes()
  useEffect(() => {
    if (editMode) {
      setFormField(editData)
    }
  }, [editMode])
  return (
    <>
      <div className='container'>
        <h1>Formulario de formData</h1>
        <br />
        <Input
          id='placaVehiculo'
          label='Identificador del formData'
          name='123456'
          type='select'
          error={error.placaVehiculo}
          value={formData.placaVehiculo}
          onChange={handleChange}
          onBlur={handleBlur}
          options={placas}
        />
        <Input
          id='fechaInicio'
          label='Fecha de Inicio'
          name='01/01/2021'
          type='date'
          error={error.fechaInicio}
          value={formData.fechaInicio}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='fechaFin'
          label='Fecha de Finalizacion'
          name='01/03/2021'
          type='date'
          error={error.fechaFin}
          value={formData.fechaFin}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='ubicacion'
          label='Ubicación'
          name='Mañongo, Naguanagua'
          type='text'
          error={error.ubicacion}
          value={formData.ubicacion}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='distancia'
          label='Distancia recorrida en el formData'
          name='1.324 Km'
          type='number'
          error={error.distancia}
          value={formData.distancia}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='costo'
          label='Costo del formData'
          name='1.540 $'
          type='number'
          error={error.costo}
          value={formData.costo}
          onChange={handleChange}
          onBlur={handleBlur}

        />
        {editMode ? (<Button onSubmit={onSubmit} text='Guardar cambios' />) : (<Button onSubmit={onSubmit} text='Registrar' />)}
      </div>
    </>

  )
}

export default FormularioViajes
