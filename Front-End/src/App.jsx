// import Conductores from './components/tables/conductores'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/partials/template.jsx'
import { ConductorView } from './components/view/Conductor.view.jsx'
import { VehiculoView } from './components/view/Vehiculo.view.jsx'
import { ViajeView } from './components/view/Viaje.view.jsx'
import { GastoView } from './components/view/Gasto.view.jsx'
import MainCard from './components/card/vehiculosM.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        path: '/',
        element: <MainCard />
      },
      {
        path: '/conductor',
        element: <ConductorView />
      },
      {
        path: '/vehiculo',
        element: <VehiculoView />
      },
      {
        path: '/viaje',
        element: <ViajeView />
      },
      {
        path: '/gasto',
        element: <GastoView />
      }
    ]
  }
])

function App () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
