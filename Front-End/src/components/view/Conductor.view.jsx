import Conductores from '../tables/conductores.jsx'
import { useState } from 'react'
import FormularioConductor from '../form/FormularioConductor.jsx'
import { ConductorProvider } from '../../context/Conductor.jsx'

export const ConductorView = () => {
  const [editMode, setEditMode] = useState(false)
  const [editData, setEditData] = useState('')
  return (
    <>
      <ConductorProvider>
        <FormularioConductor editMode={editMode} editData={editData} />
        <Conductores setEditMode={setEditMode} editMode={editMode} setEditData={setEditData} />
      </ConductorProvider>

    </>
  )
}
