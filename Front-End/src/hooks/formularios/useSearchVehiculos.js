import { useContext, useEffect, useState } from 'react'
import { VehiculoContext } from '../../context/vehiculo.jsx'
import {
  validatePlaca,
  validateNumber,
  validateCedula
} from '../utils/validationField.js'

import {
  createVehiculo
} from '../../service/Vehiculos.js'

export const useSearchVehiculos = () => {
  const { vehiculo, setVehiculo } = useContext(VehiculoContext)
  const [exito, setExito] = useState(false)
  const [error, setError] = useState({
    placa: false,
    marca: false,
    modelo: false,
    capacidad: false,
    viajesRealizados: false,
    cedulaConductor: false
  })

  useEffect(() => {
    // VALIDACIONES DE CADA CAMPO
    if (vehiculo.placa === '' || !validatePlaca(vehiculo.placa)) {
      setError((error) => ({ ...error, placa: true }))
    } else {
      setError((error) => ({ ...error, placa: false }))
    }

    if (vehiculo.marca === '' || vehiculo.marca.length < 2) {
      setError((error) => ({ ...error, marca: true }))
    } else {
      setError((error) => ({ ...error, marca: false }))
    }

    if (vehiculo.modelo === '' || vehiculo.modelo.length < 2) {
      setError((error) => ({ ...error, modelo: true }))
    } else {
      setError((error) => ({ ...error, modelo: false }))
    }

    if (vehiculo.capacidad === '' || !validateNumber(vehiculo.capacidad)) {
      setError((error) => ({ ...error, capacidad: true }))
    } else {
      setError((error) => ({ ...error, capacidad: false }))
    }

    if (vehiculo.viajesRealizados === '' || !validateNumber(vehiculo.viajesRealizados)) {
      setError((error) => ({ ...error, viajesRealizados: true }))
    } else {
      setError((error) => ({ ...error, viajesRealizados: false }))
    }

    if (vehiculo.cedulaConductor === '' || !validateCedula(vehiculo.cedulaConductor)) {
      setError((error) => ({ ...error, cedulaConductor: true }))
    } else {
      setError((error) => ({ ...error, cedulaConductor: false }))
    }
  }, [vehiculo])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !error.placa &&
      !error.marca &&
      !error.modelo &&
      !error.capacidad &&
      !error.viajesRealizados &&
      !error.cedulaConductor
    ) {
      createVehiculo(vehiculo)
        .then((res) => {
          if (res.status === 200) {
            setExito(true)
            window.location.reload()
          }
          setVehiculo({
            placa: '',
            marca: '',
            modelo: '',
            capacidad: '',
            disponibilidad: '',
            aire: '',
            viajesRealizados: '',
            cedulaConductor: ''
          })
        })
        .catch((err) => console.log(err))
    }
  }
  return { vehiculo, setVehiculo, error, handleSubmit, exito }
}
