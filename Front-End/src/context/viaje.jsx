import { createContext, useState } from 'react'

export const ViajeContext = createContext()

export const ViajeProvider = ({ children }) => {
  const [viajes, setViajes] = useState([])
  const [viaje, setViaje] = useState({
    id: '',
    placaVehiculo: '',
    fechaInicio: '',
    fechaFin: '',
    ubicacion: '',
    distancia: '',
    costo: ''
  })

  return (
    <ViajeContext.Provider
      value={{
        viajes,
        setViajes,
        viaje,
        setViaje
      }}
    >
      {children}
    </ViajeContext.Provider>
  )
}
