import { useState } from 'react'
import { nameValidation, cedulaValidation, edadValidation, telefonoValidation, gananciaValidation } from '../utils/validationField'
import { createConductor, editConductor } from '../../service/Conductores.js'

export const useSearchConductor = (editMode) => {
  const [formData, setFormField] = useState({
    nombre: '',
    cedula: '',
    edad: '',
    telefono: '',
    ganancia: '',
    disponibilidad: false,
    viajesRealizados: 0
  })

  const [error, setError] = useState({
    nombre: '',
    cedula: '',
    edad: '',
    telefono: '',
    ganancia: ''
  })

  const handleBlur = (e) => {
    switch (e.target.id) {
      case 'nombre':
        setError({
          ...error,
          nombre: nameValidation(e.target.value)
        })
        break
      case 'cedula':
        setError({
          ...error,
          cedula: cedulaValidation(e.target.value)
        })
        break
      case 'edad':
        setError({
          ...error,
          edad: edadValidation(e.target.value)
        })
        break
      case 'telefono':
        setError({
          ...error,
          telefono: telefonoValidation(e.target.value)
        })
        break
      case 'ganancia':
        setError({
          ...error,
          ganancia: gananciaValidation(e.target.value)
        })
        break
      default:
        break
    }
  }

  const handleChanges = (e) => {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormField({
      ...formData,
      [e.target.id]: newValue
    })
  }

  const onSubmit = (e) => {
    const formValues = Object.values(formData)
    const errorValues = Object.values(error)
    const noError = errorValues.every((el) => el === '')
    const noEmptyFields = formValues.every((el) => el !== '')

    if (noError && noEmptyFields) {
      handleSubmit()
    } else {
      console.log('Error')
    }
  }
  const handleSubmit = () => {
    console.log(formData)
    !editMode
      ? createConductor(formData)
      : editConductor(formData.cedula, formData)

    window.location.reload()
  }

  return {
    formData,
    onSubmit,
    error,
    handleBlur,
    handleChanges,
    handleSubmit,
    setFormField
  }
}
