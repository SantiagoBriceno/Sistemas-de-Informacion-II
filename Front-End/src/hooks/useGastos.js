import { useState, useEffect } from 'react'
import { getAllGastos } from '../service/Gastos.js'

const useGastos = () => {
  const [gastos, setGastos] = useState([])

  const refreshGastos = () => {
    getAllGastos().then(gastos => setGastos(gastos))
  }
  useEffect(() => {
    refreshGastos()
  }, [])
  return { gastos }
}

export { useGastos }
