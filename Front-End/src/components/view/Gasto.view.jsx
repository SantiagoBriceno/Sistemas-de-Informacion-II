import Gastos from '../tables/Gastos.jsx'
import FormularioGasto from '../form/FormularioGastos.jsx'
import { GastoProvider } from '../../context/Gasto.jsx'
import { useState } from 'react'

export const GastoView = () => {
  const [editData, setEditData] = useState('')
  const [editMode, setEditMode] = useState(false)
  return (
    <>
      <GastoProvider>
        <FormularioGasto editMode={editMode} editData={editData} />
        <Gastos editMode={editMode} setEditMode={setEditMode} setEditData={setEditData} />
      </GastoProvider>

    </>
  )
}
