import { createContext, useState } from 'react'

export const GastoContext = createContext()

export const GastoProvider = ({ children }) => {
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({
    placaVehiculo: '',
    fecha: '',
    descripcion: '',
    costo: ''
  })
  return (
    <GastoContext.Provider
      value={{
        gastos,
        setGastos,
        gasto,
        setGasto
      }}
    >
      {children}
    </GastoContext.Provider>
  )
}
