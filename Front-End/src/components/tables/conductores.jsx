import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Conductores () {
  const [conductores, setConductores] = useState([])
  const [sortConfig, setSortConfig] = useState({ key: null, direction: '' })

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/conductores')
      .then((res) => {
        setConductores(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  const sortedConductores = conductores.sort((a, b) => {
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
    <div className='bg-gray-50 p-4 mt-40 ml-80'>
      <h1 className='text-2xl font-bold mb-4'>Choferes</h1>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th
              className='px-4 py-2 text-center cursor-pointer'
              onClick={() => handleSort('cedula')}
            >
              Cedula {getSortIndicator('cedula')}
            </th>
            <th
              className='px-4 py-2 text-center cursor-pointer'
              onClick={() => handleSort('nombre')}
            >
              Nombre {getSortIndicator('nombre')}
            </th>
            <th
              className='px-4 py-2 text-center cursor-pointer'
              onClick={() => handleSort('edad')}
            >
              Edad {getSortIndicator('edad')}
            </th>
            <th
              className='px-4 py-2 text-center cursor-pointer'
              onClick={() => handleSort('telefono')}
            >
              Telefono {getSortIndicator('telefono')}
            </th>
            <th
              className='px-4 py-2 text-center cursor-pointer'
              onClick={() => handleSort('disponibilidad')}
            >
              Disponibilidad {getSortIndicator('disponibilidad')}
            </th>
            <th
              className='px-4 py-2 text-center cursor-pointer'
              onClick={() => handleSort('ganancia')}
            >
              Bs/Semanal {getSortIndicator('ganancia')}
            </th>
            <th
              className='px-4 py-2 text-center cursor-pointer'
              onClick={() => handleSort('viajesRealizados')}
            >
              Viajes Realizados{' '}
              {getSortIndicator('viajesRealizados')}
            </th>
            <th className='px-4 py-2 text-center'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sortedConductores.map((conductor) => (
            <tr key={conductor.id}>
              <td className='border px-4 py-2 text-center'>
                {conductor.cedula}
              </td>
              <td className='border px-4 py-2 text-center'>
                {conductor.nombre}
              </td>
              <td className='border px-4 py-2 text-center'>
                {conductor.edad}
              </td>
              <td className='border px-4 py-2 text-center'>
                {conductor.telefono}
              </td>
              <td className='border px-4 py-2 text-center'>
                {conductor.disponibilidad ? 'Disponible' : 'No disponible'}
              </td>
              <td className='border px-4 py-2 text-center'>
                {conductor.ganancia} Bs
              </td>
              <td className='border px-4 py-2 text-center'>
                {conductor.viajesRealizados}
              </td>
              <td className='border px-4 py-2 text-center'>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4 resize-x'>
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

export default Conductores
