import React from 'react'
import Input from '../form/Input'
import Button from '../form/Button'
import './formulario.css'

const FormularioViaje = () => {
  return (
    <>
      <div className='container'>
        <h1>Formulario de viaje</h1>
        <br />
        <Input
          label='Identificador del viaje'
          name='123456'
          type='number'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Fecha de Inicio'
          name='01/01/2021'
          type='date'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Fecha de Finalizacion'
          name='01/03/2021'
          type='date'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Ubicación'
          name='Mañongo, Naguanagua'
          type='text'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Distancia recorrida en el viaje'
          name='1.324 Km'
          type='number'
          error='Ingrese un valor válido, por favor'
        />
        <Input
          label='Costo del viaje'
          name='1.540 BsS'
          type='number'
          error='Ingrese un valor válido, por favor'
        />
        <Button />
      </div>
    </>

  )
}

export default FormularioViaje
