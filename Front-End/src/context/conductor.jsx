import { createContext, useState } from 'react'

export const ConductorContext = createContext()

export const ConductorProvider = ({ children }) => {
  const [conductores, setConductores] = useState([])
  const [conductor, setConductor] = useState({
    cedula: null,
    nombre: null,
    edad: null,
    telefono: null,
    disponibilidad: null,
    ganancia: null,
    viajesRealizados: null
  })

  return (
    <ConductorContext.Provider
      value={{
        conductores,
        setConductores,
        conductor,
        setConductor
      }}
    >
      {children}
    </ConductorContext.Provider>
  )
}
