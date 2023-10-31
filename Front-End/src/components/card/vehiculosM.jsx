import React, { useState, useEffect } from 'react'
import axios from 'axios'
import viajesRealizados from './assets/viajesRealizados.webp'
import conductoresVehiculo from './assets/Conductores.jpg'
import './assets/mainCard.css'

function MainCard () {
  const [vehiculos, setVehiculos] = useState([])
  const [viajes, setViajes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/vehiculos/id/conductor')
      .then((res) => {
        setVehiculos(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get('http://localhost:3000/api/viajes/id/vehiculoConductor')
      .then((res) => {
        const viajes = res.data.data.map((viaje) => ({
          ...viaje,
          fechaInicio: formatDate(viaje.fechaInicio)
        }))

        viajes.sort((a, b) => {
          const dateA = new Date(a.fechaInicio)
          const dateB = new Date(b.fechaInicio)

          return dateB - dateA
        }
        )
        setViajes(viajes)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()

    return `${day}-${month}-${year}`
  }

  return (
    <>
      <h1 className='mt-32 ml-80 text-4xl align-text-center'>Multiservicios JoCeSanti C.A</h1>
      <div className='containerMain' style={{ marginTop: '20px' }}>
        <div className='sub-container rounded overflow-hidden shadow-lg p-4 bg-gray-100'>

          <div className='table-container'>
            <img className='w-full pb-5' src={viajesRealizados} alt='Sunset in the mountains' style={{ borderRadius: 0 }} />
            <h2 className='text-2xl font-bold mb-4 text-center'>Ultimos viajes</h2>
            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <th
                    className='px-4 py-2 text-center cursor-pointer'
                  >
                    Ubicacion
                  </th>
                  <th
                    className='px-4 py-2 text-center cursor-pointer'
                  >
                    Distancia
                  </th>
                  <th
                    className='px-4 py-2 text-center cursor-pointer'
                  >
                    Fecha de inicio
                  </th>
                  <th
                    className='px-4 py-2 text-center cursor-pointer'
                  >
                    Marca
                  </th>
                  <th
                    className='px-4 py-2 text-center cursor-pointer'
                  >
                    Modelo
                  </th>
                  <th
                    className='px-4 py-2 text-center cursor-pointer'
                  >
                    Nombre
                  </th>
                </tr>
              </thead>
              <tbody>
                {viajes.map((viaje) => (
                  <tr
                    key={viaje.nombre}
                    className='hover:bg-gray-200'
                  >
                    <td className='border px-4 py-2 text-center'>
                      {viaje.ubicacion}
                    </td>
                    <td className='border px-4 py-2 text-center'>
                      {viaje.distancia} km
                    </td>
                    <td className='border px-4 py-2 text-center'>
                      {viaje.fechaInicio}
                    </td>
                    <td className='border px-4 py-2 text-center'>
                      {viaje.marca}
                    </td>
                    <td className='border px-4 py-2 text-center'>
                      {viaje.modelo}
                    </td>
                    <td className='border px-4 py-2 text-center'>
                      {viaje.nombre}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
        <div className='sub-container rounded overflow-hidden shadow-lg p-4 bg-gray-100'>
          <div className='table-container'>
            <img className='w-full pb-5' src={conductoresVehiculo} alt='Sunset in the mountains' style={{ borderRadius: 0 }} />
            <h2 className='text-2xl font-bold mb-4 text-center'>Vehiculos con conductor asignado</h2>
            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <th
                    className='px-4 py-2 text-center cursor-pointer'
                  >
                    Placa del vehiculo
                  </th>
                  <th
                    className='px-4 py-2 text-center cursor-pointer'
                  >
                    Marca
                  </th>
                  <th
                    className='px-4 py-2 text-center cursor-pointer'
                  >
                    Modelo
                  </th>
                  <th
                    className='px-4 py-2 text-center cursor-pointer'
                  >
                    Conductor asignado
                  </th>
                </tr>
              </thead>
              <tbody>
                {vehiculos.map((vehiculo) => (
                  <tr
                    key={vehiculo.placa}
                    className='hover:bg-gray-200'
                  >
                    <td className='border px-4 py-2 text-center'>
                      {vehiculo.placa}
                    </td>
                    <td className='border px-4 py-2 text-center'>
                      {vehiculo.marca}
                    </td>
                    <td className='border px-4 py-2 text-center'>
                      {vehiculo.modelo}
                    </td>
                    <td className='border px-4 py-2 text-center'>
                      {vehiculo.nombre}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainCard
