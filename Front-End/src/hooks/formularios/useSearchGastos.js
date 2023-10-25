import { useState, useMemo } from 'react'
import { placaValidation, fechaValidation, descripcionValidation, valorNumericoValidation } from '../utils/validationField.js'
import { createGasto } from '../../service/Gastos.js'
import { getPlacas } from '../../service/Viajes.js'

export const useSearchGastos = () => {
  const [placas, setPlacas] = useState([])
  const [formData, setFormField] = useState({
    placaVehiculo: '',
    fecha: '',
    descripcion: '',
    costo: ''
  })

  const [error, setError] = useState({
    placaVehiculo: '',
    fecha: '',
    descripcion: '',
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
      case 'fecha':
        setError({
          ...error,
          fecha: fechaValidation(e.target.value)
        })
        break
      case 'descripcion':
        setError({
          ...error,
          descripcion: descripcionValidation(e.target.value)
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

  const handleSubmit = (e) => {
    createGasto(formData)
    window.location.reload()
  }

  useMemo(() => {
    getPlacas().then((placa) => setPlacas(placa))
  }, [])

  return {
    formData,
    error,
    handleBlur,
    handleChange,
    handleSubmit,
    placas,
    setFormField
  }
}
