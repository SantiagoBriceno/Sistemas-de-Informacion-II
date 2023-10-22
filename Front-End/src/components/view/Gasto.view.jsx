import Gastos from '../tables/Gastos.jsx'
import FormularioGasto from '../form/FormularioGasto.jsx'
import { GastoProvider } from '../../context/gasto.jsx'

export const GastoView = () => {
  return (
    <>
      <GastoProvider>
        <FormularioGasto />
        <Gastos />
      </GastoProvider>

    </>
  )
}
