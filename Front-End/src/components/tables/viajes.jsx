import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Viajes () {
  const [viajes, setViajes] = useState([])
  const [sortConfig, setSortConfig] = useState({ key: null, direction: '' })

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/viajes')
      .then((res) => {
        const viajes = res.data.data.map((viaje) => ({
          ...viaje,
          fecha: formatDate(viaje.fecha)
        }))
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

  const handleSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  const sortedViajes = viajes.sort((a, b) => {
    if (sortConfig.direction === 'ascending') {
      if (a[sortConfig.key] < b[sortConfig.key]) return -1
      if (a[sortConfig.key] > b[sortConfig.key]) return 1
    } else if (sortConfig.direction === 'descending') {
      if (a[sortConfig.key] > b[sortConfig.key]) return -1
      if (a[sortConfig.key] < b[sortConfig.key]) return 1
    }
    return 0
  })

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'ascending') {
        return <span>&#9650;</span> // Up arrow
      } else if (sortConfig.direction === 'descending') {
        return <span>&#9660;</span> // Down arrow
      }
    }
    return null
  }

  return (
    <div className='bg-gray-50 p-4'>
      <h1 className='text-2xl font-bold mb-4'>Viajes</h1>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th
              className='px-4 py-2 text-center cursor-pointer'
              onClick={() => handleSort('placa')}
            >
              Placa del Vehiculo {getSortIndicator('placa')}
            </th>
            <th
              className='px-4 py-2 text-center cursor-pointer'
              onClick={() => handleSort('fecha')}
            >
              Fecha {getSortIndicator('fecha')}
            </th>
            <th
              className='px-4 py-2 text-center cursor-pointer'
              onClick={() => handleSort('descripcion')}
            >
              Descripcion {getSortIndicator('descripcion')}
            </th>
            <th
              className='px-4 py-2 text-center cursor-pointer'
              onClick={() => handleSort('costo')}
            >
              Costo {getSortIndicator('costo')}
            </th>
            <th className='px-4 py-2 text-center'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sortedViajes.map((viaje) => (
            <tr key={viaje.id}>
              <td className='border px-4 py-2 text-center'>
                {viaje.placaVehiculo}
              </td>
              <td className='border px-4 py-2 text-center'>
                {viaje.fecha}
              </td>
              <td className='border px-4 py-2 text-center'>
                {viaje.descripcion}
              </td>
              <td className='border px-4 py-2 text-center'>
                {viaje.costo}
              </td>
              <td className='border px-4 py-2 text-center'>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4'>
                  Eliminar
                </button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Viajes
