import { createContext, useState } from 'react'

export const ConductorContext = createContext()

export const ConductorProvider = ({ children }) => {
  const [conductores, setConductores] = useState([])
  const [conductor, setConductor] = useState({})
  const [conductorCedula, setConductorCedula] = useState('')
  const [conductorName, setConductorName] = useState('')
  const [conductorEdad, setConductorEdad] = useState('')
  const [conductorTelefono, setConductorTelefono] = useState('')
  const [conductorDisponibilidad, setConductorDisponibilidad] = useState('')
  const [ganancia, setGanancia] = useState('')
  const [viajes, setViajesRealizados] = useState([])

  return (
    <ConductorContext.Provider
      value={{
        conductores,
        setConductores,
        conductor,
        setConductor,
        conductorCedula,
        setConductorCedula,
        conductorName,
        setConductorName,
        conductorEdad,
        setConductorEdad,
        conductorTelefono,
        setConductorTelefono,
        conductorDisponibilidad,
        setConductorDisponibilidad,
        ganancia,
        setGanancia,
        viajes,
        setViajesRealizados
      }}
    >
      {children}
    </ConductorContext.Provider>
  )
}
