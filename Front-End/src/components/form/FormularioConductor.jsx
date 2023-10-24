import Input from './components/Input'
import Button from './components/Button'
import './formulario.css'
import { useSearchConductor } from '../../hooks/formularios/useSearchConductor.js'

const FormularioConductor = ({ editMode, editConductor }) => {
  const { conductor, setConductor, error, handleSubmit } = useSearchConductor()
  console.log(editMode)

  const handleChanges = (e) => {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setConductor({
      ...conductor,
      [e.target.id]: newValue
    })
  }

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
          value={editMode ? editConductor.nombre : conductor.nombre}
          event={handleChanges}
        />
        <Input
          id='cedula'
          label='Cédula de identidad'
          name='28402367'
          type='number'
          error={error.cedula}
          value={editMode ? editConductor.cedula : conductor.cedula}
          event={handleChanges}
        />
        <Input
          id='edad'
          label='Edad actual'
          name='22'
          type='number'
          error={error.edad}
          value={editMode ? editConductor.edad : conductor.edad}
          event={handleChanges}
        />
        <Input
          id='telefono'
          label='Número de teléfono'
          name='0424-1234567'
          type='number'
          error={error.telefono}
          value={editMode ? editConductor.telefono : conductor.telefono}
          event={handleChanges}
        />
        <Input
          id='ganancia'
          label='Sueldo semanal'
          name='1.540 BsS'
          type='number'
          error={error.ganancia}
          value={editMode ? editConductor.ganancia : conductor.ganancia}
          event={handleChanges}
        />
        <Input
          id='disponibilidad'
          label='Disponibilidad'
          type='checkbox'
          value={editMode ? editConductor.disponibilidad : conductor.disponibilidad}
          event={handleChanges}
        />
        <Button onSubmit={handleSubmit} editMode={editMode} />
      </div>
    </>

  )
}

export default FormularioConductor
