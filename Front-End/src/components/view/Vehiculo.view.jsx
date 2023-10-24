import Vehiculos from '../tables/Vehiculos.jsx'
import FormularioVehiculo from '../form/FormularioVehiculo.jsx'
import { VehiculoProvider } from '../../context/Vehiculo.jsx'

export const VehiculoView = () => {
  return (
    <>
      <VehiculoProvider>
        <FormularioVehiculo />
        <Vehiculos />
      </VehiculoProvider>
    </>
  )
}
