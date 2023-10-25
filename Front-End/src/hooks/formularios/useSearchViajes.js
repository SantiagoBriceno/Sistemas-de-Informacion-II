import { useState, useMemo } from 'react'
import { placaValidation, valorNumericoValidation, fechaValidation, stringValidation } from '../utils/validationField.js'
import { createViaje, getPlacas, editViaje } from '../../service/Viajes.js'

export const useSearchViajes = (editMode) => {
  const [placas, setPlacas] = useState([])
  const [formData, setFormField] = useState({
    placaVehiculo: '',
    fechaInicio: '',
    fechaFin: '',
    ubicacion: '',
    distancia: '',
    costo: ''
  })

  const [error, setError] = useState({
    placaVehiculo: '',
    fechaInicio: '',
    fechaFin: '',
    ubicacion: '',
    distancia: '',
    costo: ''
  })

  const handleBlur = (e) => {
    switch (e.target.id) {
      case 'placaVehiculo':
        setError({
          ...error,
          placaVehiculo: placaValidation(e.target.value)
        })
        break
      case 'fechaInicio':
        setError({
          ...error,
          fechaInicio: fechaValidation(e.target.value)
        })
        break
      case 'fechaFin':
        setError({
          ...error,
          fechaFin: fechaValidation(e.target.value)
        })
        break
      case 'ubicacion':
        setError({
          ...error,
          ubicacion: stringValidation(e.target.value)
        })
        break
      case 'distancia':
        setError({
          ...error,
          distancia: valorNumericoValidation(e.target.value)
        })
        break
      case 'costo':
        setError({
          ...error,
          costo: valorNumericoValidation(e.target.value)
        })
        break
      default:
        break
    }
  }
  const handleChange = (e) => {
    setFormField({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  useMemo(() => {
    getPlacas().then((placa) => setPlacas(placa))
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
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
    !editMode ? createViaje(formData) : editViaje(formData.id, formData)
    window.location.reload()
  }

  return {
    formData,
    error,
    handleBlur,
    handleChange,
    onSubmit,
    placas,
    setFormField
  }
}
