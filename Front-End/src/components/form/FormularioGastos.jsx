import React, { useEffect } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import './formulario.css'
import { useSearchGastos } from '../../hooks/formularios/useSearchGastos.js'

const FormularioGasto = ({ editMode, editData }) => {
  const { error, formData, handleBlur, handleChange, handleSubmit, placas, setFormField } = useSearchGastos(editMode)

  useEffect(() => {
    if (editMode) {
      setFormField(editData)
    }
  }, [editMode])

  const onSubmit = (e) => {
    e.preventDefault()
    if (error.placaVehiculo === '' && error.fecha === '' && error.descripcion === '' && error.costo === '' && formData.placaVehiculo !== '' && formData.fecha !== '' && formData.descripcion !== '' && formData.costo !== '') {
      handleSubmit()
      setFormField({
        placaVehiculo: '',
        fecha: '',
        descripcion: '',
        costo: ''
      })
    } else {
      window.alert('Por favor, rellene todos los campos')
    }
  }
  return (
    <>
      <div className='container'>
        <h1>Formulario de Gasto</h1>
        <br />
        <Input
          id='placaVehiculo'
          label='Placa del vehículo'
          name='Ej: 123ABC'
          type='select'
          error={error.placaVehiculo}
          value={formData.placaVehiculo}
          onChange={handleChange}
          options={placas}
          onBlur={handleBlur}
        />
        <Input
          id='fecha'
          label='Fecha de Realización'
          name='01/01/2021'
          type='date'
          error={error.fecha}
          value={formData.fecha}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='descripcion'
          label='Descripción'
          name='Sunfire'
          type='text'
          error={error.descripcion}
          value={formData.descripcion}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          id='costo'
          label='Costo'
          name='1.540 BsS'
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

export default FormularioGasto
