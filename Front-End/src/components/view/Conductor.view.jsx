import Conductores from '../tables/conductores.jsx'
import FormularioConductor from '../form/FormularioConductor.jsx'
import { ConductorProvider } from '../../context/Conductor.jsx'

export const ConductorView = () => {
  return (
    <>
      <ConductorProvider>
        <FormularioConductor />
        <Conductores />
      </ConductorProvider>

    </>
  )
}
