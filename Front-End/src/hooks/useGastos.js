import { useEffect, useContext } from 'react'
import { GastoContext } from '../context/Gasto.jsx'
import {
  getAllGastos,
  deleteGasto as deleteGastoApi
} from '../service/Gastos.js'

const useGastos = () => {
  const { gastos, setGastos } = useContext(GastoContext)

  const refreshGastos = () => {
    getAllGastos().then((gastos) => setGastos(gastos))
  }
  useEffect(() => {
    refreshGastos()
  }, [])

  const deleteGasto = async (id) => {
    try {
      await deleteGastoApi(id)
      setGastos((prevGastos) =>
        prevGastos.filter((gasto) => gasto.id !== id)
      )
    } catch (error) {
      console.log('Error deleting gasto:', error)
    }
  }
  return { gastos, deleteGasto }
}

export { useGastos }
