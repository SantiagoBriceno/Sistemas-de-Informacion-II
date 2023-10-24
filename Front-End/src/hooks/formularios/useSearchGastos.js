import { useContext, useEffect, useState } from 'react'
import { GastoContext } from '../../context/Gasto.jsx'
import {
  validatePlaca,
  validateFecha,
  validateNumber
} from '../utils/validationField.js'

import {
  createGasto
} from '../../service/Gastos.js'

import {
  getPlacas
} from '../../service/Viajes.js'

export const useSearchGastos = () => {
  const { gasto, setGasto } = useContext(GastoContext)
  const [placas, setPlacas] = useState([])
  const [exito, setExito] = useState(false)
  const [error, setError] = useState({
    placaVehiculo: false,
    fecha: false,
    descripcion: false,
    costo: false
  })

  useEffect(() => {
    // VALIDACIONES DE CADA CAMPO
    if (gasto.placaVehiculo === '' || !validatePlaca(gasto.placaVehiculo)) {
      setError((error) => ({ ...error, placaVehiculo: true }))
    } else {
      setError((error) => ({ ...error, placaVehiculo: false }))
    }

    if (gasto.fecha === '' || !validateFecha(gasto.fecha)) {
      setError((error) => ({ ...error, fecha: true }))
    } else {
      setError((error) => ({ ...error, fecha: false }))
    }

    if (gasto.descripcion === '' || gasto.descripcion.length < 5) {
      setError((error) => ({ ...error, descripcion: true }))
    } else {
      setError((error) => ({ ...error, descripcion: false }))
    }

    if (gasto.costo === '' || !validateNumber(gasto.costo)) {
      setError((error) => ({ ...error, costo: true }))
    } else {
      setError((error) => ({ ...error, costo: false }))
    }
  }, [gasto])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !error.placaVehiculo &&
      !error.fecha &&
      !error.descripcion &&
      !error.costo
    ) {
      createGasto(gasto)
        .then((res) => {
          if (res.status === 200) {
            setExito(true)
            window.location.reload()
          }
          setGasto({
            placaVehiculo: '',
            fecha: '',
            descripcion: '',
            costo: ''
          })
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    getPlacas().then((res) => {
      setPlacas(res)
    })
  }, [])
  return { gasto, setGasto, error, handleSubmit, exito, placas }
}
