import Vehiculos from '../tables/Vehiculos.jsx'
import FormularioVehiculo from '../form/FormularioVehiculo.jsx'
import { VehiculoProvider } from '../../context/vehiculo.jsx'

export const VehiculoView = () => {
  return (
    <>
      <VehiculoProvider>
        <FormularioVehiculo />
      </VehiculoProvider>
      <Vehiculos />

    </>
  )
}
