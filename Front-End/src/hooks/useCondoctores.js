import { useState, useEffect } from 'react'
import { getAllConductores } from '../service/Conductores.js'

const useConductores = () => {
  const [conductores, setConductores] = useState([])

  const refreshConductores = () => {
    getAllConductores().then(newConductores => setConductores(newConductores))
  }
  useEffect(() => {
    refreshConductores()
  }, [])
  return { conductores }
}

export { useConductores }
