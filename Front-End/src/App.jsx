// import Conductores from './components/tables/conductores'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/partials/template.jsx'
import { ConductorView } from './components/view/Conductor.view.jsx'
import { VehiculoView } from './components/view/Vehiculo.view.jsx'
import { ViajeView } from './components/view/Viaje.view.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
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
      }
    ]
  }
])

function App () {
  return (
    <RouterProvider router={router} />
  )
}
export default App
