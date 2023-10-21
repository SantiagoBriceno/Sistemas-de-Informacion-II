import React from 'react'
import { useSortedEntity } from '../../hooks/useSortedEntity'
import { useViajes } from '../../hooks/useViajes'

function Viajes () {
  const { viajes } = useViajes()
  const { sortedEntity, handleSort, getSortIndicator } = useSortedEntity(viajes)

  const sortedViajes = sortedEntity

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
