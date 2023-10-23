import { createContext, useState } from 'react'

export const ConductorContext = createContext()

export const ConductorProvider = ({ children }) => {
  const [conductores, setConductores] = useState([])
  const [conductor, setConductor] = useState({
    cedula: '',
    nombre: '',
    edad: '',
    telefono: '',
    disponibilidad: '',
    ganancia: '',
    viajesRealizados: ''
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
