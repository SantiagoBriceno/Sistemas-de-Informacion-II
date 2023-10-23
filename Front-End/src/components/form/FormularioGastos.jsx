import React from 'react'
import Input from './components/Input'
import Button from './components/Button'
import './formulario.css'
import { useSearchGastos } from '../../hooks/formularios/useSearchGastos.js'

const FormularioGasto = () => {
  const { gasto, setGasto, error, handleSubmit } = useSearchGastos()
  const handleChange = (e) => {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setGasto({
      ...gasto,
      [e.target.id]: newValue
    })
  }
  return (
    <>
      <div className='container'>
        <h1>Formulario de Gasto</h1>
        <br />
        <Input
          id='placaVehiculo'
          label='Placa del vehículo'
          name='ABC-123'
          type='text'
          error={error.placaVehiculo}
          value={gasto.placaVehiculo}
          event={handleChange}
        />
        <Input
          id='fecha'
          label='Fecha de Realización'
          name='01/01/2021'
          type='date'
          error={error.fecha}
          value={gasto.fecha}
          event={handleChange}
        />
        <Input
          id='descripcion'
          label='Descripción'
          name='Sunfire'
          type='text'
          error={error.descripcion}
          value={gasto.descripcion}
          event={handleChange}
        />
        <Input
          id='costo'
          label='Costo'
          name='1.540 BsS'
          type='number'
          error={error.costo}
          value={gasto.costo}
          event={handleChange}
        />
        <Button onSubmit={handleSubmit} />
      </div>
    </>

  )
}

export default FormularioGasto
