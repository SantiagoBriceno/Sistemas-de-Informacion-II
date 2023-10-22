import Viajes from '../tables/Viajes.jsx'
import FormularioViaje from '../form/FormularioViajes.jsx'
import { ViajeProvider } from '../../context/viaje.jsx'

export const ViajeView = () => {
  return (
    <>
      <ViajeProvider>
        <FormularioViaje />
      </ViajeProvider>
      <Viajes />
    </>
  )
}
