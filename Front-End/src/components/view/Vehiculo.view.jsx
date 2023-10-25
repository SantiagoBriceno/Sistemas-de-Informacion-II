import Vehiculos from '../tables/Vehiculos.jsx'
import FormularioVehiculo from '../form/FormularioVehiculo.jsx'
import { VehiculoProvider } from '../../context/Vehiculo.jsx'
import { useState } from 'react'
export const VehiculoView = () => {
  const [editData, setEditData] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [visualizar, setVisualizar] = useState(true)
  const [visualizarData, setVisualizarData] = useState({})

  return (
    <>
      <VehiculoProvider>
        <FormularioVehiculo editMode={editMode} setEditMode={setEditMode} editData={editData} visualizarData={visualizarData} />
        <Vehiculos editMode={editMode} setEditMode={setEditMode} setEditData={setEditData} visualizar={visualizar} setVisualizar={setVisualizar} setVisualizarData={setVisualizarData} />
      </VehiculoProvider>
    </>
  )
}
