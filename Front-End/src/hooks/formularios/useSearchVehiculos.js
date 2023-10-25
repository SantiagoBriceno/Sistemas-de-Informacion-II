import { useState, useMemo } from 'react'
import { placaValidation, valorNumericoValidation, cedulaValidation, stringValidation } from '../utils/validationField.js'
import { createVehiculo, editVehiculo } from '../../service/Vehiculos.js'
import { getCedulas } from '../../service/Conductores.js'

export const useSearchVehiculos = (editMode) => {
  const [cedula, setCedula] = useState([])
  const [formData, setFormField] = useState({
    placa: '',
    marca: '',
    modelo: '',
    capacidad: '',
    disponibilidad: '',
    aire: '',
    viajesRealizados: 0,
    cedulaConductor: ''
  })

  const [error, setError] = useState({
    placa: '',
    marca: '',
    modelo: '',
    capacidad: '',
    cedulaConductor: ''
  })

  const handleBlur = (e) => {
    switch (e.target.id) {
      case 'placa':
        setError({
          ...error,
          placa: placaValidation(e.target.value)
        })
        break
      case 'marca':
        setError({
          ...error,
          marca: stringValidation(e.target.value)
        })
        break
      case 'modelo':
        setError({
          ...error,
          modelo: stringValidation(e.target.value)
        })
        break
      case 'capacidad':
        setError({
          ...error,
          capacidad: valorNumericoValidation(e.target.value)
        })
        break
      case 'cedulaConductor':
        setError({
          ...error,
          cedulaConductor: cedulaValidation(e.target.value)
        })
        break
      default:
        break
    }
  }

  const handleChange = (e) => {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormField({
      ...formData,
      [e.target.id]: newValue
    })
  }

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

  useMemo(() => {
    getCedulas().then((cedula) => setCedula(cedula))
  }, [])

  const handleSubmit = () => {
    !editMode ? createVehiculo(formData) : editVehiculo(formData.placa, formData)
    window.location.reload()
  }

  return {
    formData,
    error,
    handleBlur,
    handleChange,
    handleSubmit,
    onSubmit,
    setFormField,
    cedula
  }
}
