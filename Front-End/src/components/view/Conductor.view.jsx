import Conductores from '../tables/conductores.jsx'
import { useState } from 'react'
import FormularioConductor from '../form/FormularioConductor.jsx'
import { ConductorProvider } from '../../context/Conductor.jsx'

export const ConductorView = () => {
  const [edit, setEdit] = useState(false)
  const [editConductor, setEditConductor] = useState({})
  return (
    <>
      <ConductorProvider>
        <FormularioConductor editMode={edit} editConductor={editConductor} />
        <Conductores setEdit={setEdit} edit={edit} setEditData={setEditConductor} />
      </ConductorProvider>

    </>
  )
}
