import { useEffect, useContext } from 'react'
import { ConductorContext } from '../context/Conductor.jsx'
import {
  getAllConductores,
  deleteConductor as deleteConductorApi
} from '../service/Conductores.js'

const useConductores = () => {
  const { conductores, setConductores } = useContext(ConductorContext)

  const refreshConductores = () => {
    getAllConductores().then((newConductores) =>
      setConductores(newConductores)
    )
  }
  useEffect(() => {
    refreshConductores()
  }, [])

  const deleteConductor = async (cedula) => {
    try {
      await deleteConductorApi(cedula)
      setConductores((prevConductores) =>
        prevConductores.filter(
          (conductor) => conductor.cedula !== cedula
        )
      )
    } catch (error) {
      console.log('Error deleting conductor:', error)
    }
  }
  return { conductores, deleteConductor }
}

export { useConductores }
