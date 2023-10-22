import { createContext, useState } from 'react'

export const ViajeContext = createContext()

export const ViajeProvider = ({ children }) => {
  const [viaje, setViaje] = useState({})
  const [viajeVehiculo, setViajeVehiculo] = useState('')
  const [viajeFechaInicio, setViajeFechaInicio] = useState('')
  const [viajeFechaFin, setViajeFechaFin] = useState('')
  const [viajeUbicacion, setViajeUbicacion] = useState('')
  const [viajeDistancia, setViajeDistancia] = useState('')
  const [viajeCosto, setViajeCosto] = useState('')

  return (
    <ViajeContext.Provider
      value={{
        viaje,
        setViaje,
        viajeVehiculo,
        setViajeVehiculo,
        viajeFechaInicio,
        setViajeFechaInicio,
        viajeFechaFin,
        setViajeFechaFin,
        viajeUbicacion,
        setViajeUbicacion,
        viajeDistancia,
        setViajeDistancia,
        viajeCosto,
        setViajeCosto
      }}
    >
      {children}
    </ViajeContext.Provider>
  )
}
