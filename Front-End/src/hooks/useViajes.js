import { useState, useEffect } from 'react'
import { getAllViajes } from '../service/Viajes.js'

const useViajes = () => {
  const [viajes, setViajes] = useState([])

  const refreshViajes = () => {
    getAllViajes().then(viajes => setViajes(viajes))
  }
  useEffect(() => {
    refreshViajes()
  }, [])
  return { viajes }
}

export { useViajes }
