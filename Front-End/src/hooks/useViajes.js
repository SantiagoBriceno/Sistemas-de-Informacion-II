import { useEffect, useContext } from 'react'
import {
  getAllViajes,
  deleteViaje as deleteViajeApi
} from '../service/Viajes.js'
import { ViajeContext } from '../context/Viaje.jsx'

const useViajes = () => {
  const { viajes, setViajes } = useContext(ViajeContext)

  const refreshViajes = () => {
    getAllViajes().then((viajes) => setViajes(viajes))
  }
  useEffect(() => {
    refreshViajes()
  }, [])

  const deleteViaje = async (viajeId) => {
    try {
      await deleteViajeApi(viajeId)
      setViajes((prevViajes) =>
        prevViajes.filter((viaje) => viaje.id !== viajeId)
      )
    } catch (error) {
      console.log('Error deleting viaje:', error)
    }
  }
  return { viajes, deleteViaje }
}

export { useViajes }
