// import Conductores from './components/tables/conductores'
import Header from './components/partials/header'
import Sidebar from './components/partials/sidebar'
import FormularioConductor from './components/views/FormularioConductor'
import FormularioVehiculo from './components/views/FormularioVehiculo'
import FormularioViaje from './components/views/FormularioViajes'

function App () {
  return (
    <>
      <Header />
      <Sidebar />
      {/* <Conductores /> */}
      {/* <FormularioConductor /> */}
      {/* <FormularioVehiculo /> */}
      <FormularioViaje />
    </>
  )
}

export default App
