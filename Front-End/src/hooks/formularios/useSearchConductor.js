import { useContext, useEffect, useState } from 'react'
import { ConductorContext } from '../../context/Conductor.jsx'
import {
  validateCedula,
  validateNumber,
  validateTelefono
} from '../utils/validationField.js'

import {
  createConductor
} from '../../service/Conductores.js'

export const useSearchConductor = () => {
  const { conductor, setConductor } = useContext(ConductorContext)
  const [exito, setExito] = useState(false)
  const [error, setError] = useState({
    cedula: false,
    nombre: false,
    edad: false,
    telefono: false,
    disponibilidad: false,
    ganancia: false,
    viajesRealizados: false
  })

  useEffect(() => {
    // VALIDACIONES DE CADA CAMPO
    if (conductor.cedula === '' || !validateCedula(conductor.cedula)) {
      setError((error) => ({ ...error, cedula: true }))
    } else {
      setError((error) => ({ ...error, cedula: false }))
    }

    if (conductor.nombre === '' || conductor.nombre === '') {
      setError((error) => ({ ...error, nombre: true }))
    } else {
      setError((error) => ({ ...error, nombre: false }))
    }

    if (conductor.edad === '' || !validateNumber(conductor.edad)) {
      setError((error) => ({ ...error, edad: true }))
    } else {
      setError((error) => ({ ...error, edad: false }))
    }

    if (conductor.telefono === '' || !validateTelefono(conductor.telefono)) {
      setError((error) => ({ ...error, telefono: true }))
    } else {
      setError((error) => ({ ...error, telefono: false }))
    }

    if (conductor.disponibilidad === '' && !validateNumber(conductor.disponibilidad)) {
      setError((error) => ({ ...error, disponibilidad: true }))
    } else {
      setError((error) => ({ ...error, disponibilidad: false }))
    }

    if (conductor.ganancia === '' && !validateNumber(conductor.ganancia)) {
      setError((error) => ({ ...error, ganancia: true }))
    } else {
      setError((error) => ({ ...error, ganancia: false }))
    }

    if (conductor.viajesRealizados === '' && !validateNumber(conductor.viajesRealizados)) {
      setError((error) => ({ ...error, viajesRealizados: true }))
    } else {
      setError((error) => ({ ...error, viajesRealizados: false }))
    }
  }, [conductor])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !error.cedula &&
      !error.nombre &&
      !error.edad &&
      !error.telefono &&
      !error.disponibilidad &&
      !error.ganancia &&
      !error.viajesRealizados
    ) {
      createConductor(conductor)
        .then((res) => {
          if (res.status === 200) {
            setExito(true)
            window.location.reload()
          }
          setConductor({
            cedula: '',
            nombre: '',
            edad: '',
            telefono: '',
            disponibilidad: '',
            ganancia: '',
            viajesRealizados: ''
          })
        })
        .catch((err) => console.log(err))
    }
  }
  return { conductor, setConductor, error, handleSubmit, exito }
}
