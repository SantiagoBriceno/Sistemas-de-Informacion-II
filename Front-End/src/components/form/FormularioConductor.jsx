import Input from './components/Input'
import Button from './components/Button'
import './formulario.css'
import { useSearchConductor } from '../../hooks/formularios/useSearchConductor.js'
import { useEffect } from 'react'

const FormularioConductor = ({ editMode, editData }) => {
  const { formData, setFormField, error, handleChanges, handleBlur, onSubmit } = useSearchConductor(editMode)

  useEffect(() => {
    if (editMode) {
      setFormField(editData)
    }
  }, [editMode])

  return (
    <>
      <div className='container'>
        <h1>Formulario de conductor</h1>
        <br />
        <Input
          id='nombre'
          label='Nombre y Apellido'
          name='nombre'
          type='text'
          error={error.nombre}
          value={formData.nombre}
          onChange={handleChanges}
          onBlur={handleBlur}
        />
        <Input
          id='cedula'
          label='Cédula de identidad'
          name='28402367'
          type='number'
          error={error.cedula}
          value={formData.cedula}
          onChange={handleChanges}
          onBlur={handleBlur}
        />
        <Input
          id='edad'
          label='Edad actual'
          name='22'
          type='number'
          error={error.edad}
          value={formData.edad}
          onChange={handleChanges}
          onBlur={handleBlur}
        />
        <Input
          id='telefono'
          label='Número de teléfono'
          name='0424-1234567'
          type='number'
          error={error.telefono}
          value={formData.telefono}
          onChange={handleChanges}
          onBlur={handleBlur}
        />
        <Input
          id='ganancia'
          label='Sueldo semanal'
          name='1.540 BsS'
          type='number'
          error={error.ganancia}
          value={formData.ganancia}
          onChange={handleChanges}
          onBlur={handleBlur}
        />
        <Input
          id='disponibilidad'
          label='Disponibilidad'
          type='checkbox'
          value={formData.disponibilidad}
          onChange={handleChanges}
        />
        {editMode ? (<Button text='Guardar Cambios' onSubmit={onSubmit} />) : (<Button text='Registrar' onSubmit={onSubmit} />)}
      </div>
    </>

  )
}

export default FormularioConductor
