import { useContext, useEffect, useMemo, useState } from 'react'
import { ViajeContext } from '../../context/viaje.jsx'
import {
  validatePlaca,
  validateFecha,
  validateNumber,
  validateText
} from '../utils/validationField.js'

import {
  createViaje,
  getPlacas
} from '../../service/Viajes.js'

export const useSearchViajes = () => {
  const { viaje, setViaje } = useContext(ViajeContext)
  const [exito, setExito] = useState(false)
  const [placas, setPlacas] = useState([])
  const [error, setError] = useState({
    placaVehiculo: false,
    fechaInicio: false,
    fechaFin: false,
    ubicacion: false,
    distancia: false,
    costo: false
  })

  useEffect(() => {
    // VALIDACIONES DE CADA CAMPO
    if (viaje.placaVehiculo === '' || !validatePlaca(viaje.placaVehiculo)) {
      setError((error) => ({ ...error, placaVehiculo: true }))
    } else {
      setError((error) => ({ ...error, placaVehiculo: false }))
    }

    if (viaje.fechaInicio === '' || !validateFecha(viaje.fechaInicio)) {
      setError((error) => ({ ...error, fechaInicio: true }))
    } else {
      setError((error) => ({ ...error, fechaInicio: false }))
    }

    if (viaje.fechaFin === '' || !validateFecha(viaje.fechaFin)) {
      setError((error) => ({ ...error, fechaFin: true }))
    } else {
      setError((error) => ({ ...error, fechaFin: false }))
    }

    if (viaje.ubicacion === '' || !validateText(viaje.ubicacion)) {
      setError((error) => ({ ...error, ubicacion: true }))
    } else {
      setError((error) => ({ ...error, ubicacion: false }))
    }

    if (viaje.distancia === '' || !validateNumber(viaje.distancia)) {
      setError((error) => ({ ...error, distancia: true }))
    } else {
      setError((error) => ({ ...error, distancia: false }))
    }

    if (viaje.costo === '' || !validateNumber(viaje.costo)) {
      setError((error) => ({ ...error, costo: true }))
    } else {
      setError((error) => ({ ...error, costo: false }))
    }
  }, [viaje])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !error.placaVehiculo &&
      !error.fecha &&
      !error.descripcion &&
      !error.costo
    ) {
      createViaje(viaje)
        .then((res) => {
          if (res.status === 200) {
            setExito(true)
            window.location.reload()
          }
          setViaje({
            placaVehiculo: '',
            fecha: '',
            descripcion: '',
            costo: ''
          })
        })
        .catch((err) => console.log(err))
    }
  }

  useMemo(() => {
    getPlacas().then((placas) => setPlacas(placas))
  }, [])

  return { viaje, setViaje, error, handleSubmit, exito, placas }
}
