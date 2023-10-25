import { createContext, useState } from 'react'

export const ConductorContext = createContext()

export const ConductorProvider = ({ children }) => {
  const [conductores, setConductores] = useState([])
  return (
    <ConductorContext.Provider
      value={{
        conductores,
        setConductores
      }}
    >
      {children}
    </ConductorContext.Provider>
  )
}
