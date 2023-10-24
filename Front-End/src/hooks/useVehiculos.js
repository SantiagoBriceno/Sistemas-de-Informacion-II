import { useEffect, useContext } from 'react'
import {
  getAllVehiculos,
  deleteVehiculo as deleteVehiculoApi
} from '../service/Vehiculos.js'
import { VehiculoContext } from '../context/Vehiculo.jsx'
const useVehiculos = () => {
  const { vehiculos, setVehiculos } = useContext(VehiculoContext)

  const refreshVehiculos = () => {
    getAllVehiculos().then((vehiculos) => setVehiculos(vehiculos))
  }

  useEffect(() => {
    refreshVehiculos()
  }, [])

  const deleteVehiculo = async (placa) => {
    try {
      await deleteVehiculoApi(placa)
      setVehiculos((prevVehiculos) =>
        prevVehiculos.filter((vehiculo) => vehiculo.placa !== placa)
      )
    } catch (error) {
      console.log('Error deleting vehiculo:', error)
    }
  }

  return { vehiculos, deleteVehiculo }
}

export { useVehiculos }
