import { useState, useEffect } from 'react'
import { getAllVehiculos } from '../service/Vehiculos.js'

const useVehiculos = () => {
  const [vehiculos, setVehiculos] = useState([])

  const refreshVehiculos = () => {
    getAllVehiculos().then(vehiculos => setVehiculos(vehiculos))
  }
  useEffect(() => {
    refreshVehiculos()
  }, [])
  return { vehiculos }
}

export { useVehiculos }
