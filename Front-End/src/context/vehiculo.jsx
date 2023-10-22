import { createContext, useState } from 'react'

export const VehiculoContext = createContext()

export const VehiculoProvider = ({ children }) => {
  const [vehiculos, setVehiculos] = useState([])
  const [vehiculo, setVehiculo] = useState({})
  const [vehiculoPlaca, setVehiculoPlaca] = useState('')
  const [vehiculoMarca, setVehiculoMarca] = useState('')
  const [vehiculoModelo, setVehiculoModelo] = useState('')
  const [vehiculoCapacidad, setVehiculoCapacidad] = useState(null)
  const [vehiculoDisponibilidad, setVehiculoDisponibilidad] = useState('')
  const [vehiculoAire, setVehiculoAire] = useState(null)
  const [vehiculoViajes, setVehiculoViajes] = useState(null)
  const [vehiculoConductor, setVehiculoConductor] = useState('')

  return (
    <VehiculoContext.Provider
      value={{
        vehiculos,
        setVehiculos,
        vehiculo,
        setVehiculo,
        vehiculoPlaca,
        setVehiculoPlaca,
        vehiculoMarca,
        setVehiculoMarca,
        vehiculoModelo,
        setVehiculoModelo,
        vehiculoAire,
        setVehiculoAire,
        vehiculoViajes,
        setVehiculoViajes,
        vehiculoCapacidad,
        setVehiculoCapacidad,
        vehiculoDisponibilidad,
        setVehiculoDisponibilidad,
        vehiculoConductor,
        setVehiculoConductor
      }}
    >
      {children}
    </VehiculoContext.Provider>
  )
}
