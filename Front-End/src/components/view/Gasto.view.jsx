import Gastos from '../tables/gastos.jsx'
import FormularioGasto from '../form/FormularioGasto.jsx'
import { GastoProvider } from '../../context/gasto.jsx'

export const GastoView = () => {
  return (
    <>
      <GastoProvider>
        <FormularioGasto />
      </GastoProvider>
      <Gastos />

    </>
  )
}
