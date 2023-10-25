import Viajes from '../tables/Viajes.jsx'
import FormularioViaje from '../form/FormularioViajes.jsx'
import { ViajeProvider } from '../../context/viaje.jsx'
import { useState } from 'react'

export const ViajeView = () => {
  const [editData, setEditData] = useState('')
  const [editMode, setEditMode] = useState(false)
  return (
    <>
      <ViajeProvider>
        <FormularioViaje editMode={editMode} setEditMode={setEditMode} editData={editData} />
        <Viajes editMode={editMode} setEditMode={setEditMode} setEditData={setEditData} />
      </ViajeProvider>
    </>
  )
}
