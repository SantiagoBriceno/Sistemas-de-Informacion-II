import { createContext, useState } from 'react'

export const VehiculoContext = createContext()

export const VehiculoProvider = ({ children }) => {
  const [vehiculos, setVehiculos] = useState([])
  const [vehiculo, setVehiculo] = useState({
    placa: '',
    marca: '',
    modelo: '',
    capacidad: '',
    disponibilidad: '',
    aire: '',
    viajesRealizados: '',
    cedulaConductor: ''
  })

  return (
    <VehiculoContext.Provider
      value={{
        vehiculos,
        setVehiculos,
        vehiculo,
        setVehiculo
      }}
    >
      {children}
    </VehiculoContext.Provider>
  )
}
