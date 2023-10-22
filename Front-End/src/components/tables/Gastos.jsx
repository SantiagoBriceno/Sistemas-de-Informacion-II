import React from 'react'
import { useSortedEntity } from '../../hooks/useSortedEntity'
import { useGastos } from '../../hooks/useGastos'

function Gastos () {
  const { gastos, deleteGasto } = useGastos()
  const { sortedEntity, handleSort, getSortIndicator } = useSortedEntity(gastos)

  const sortedGastos = sortedEntity

  const handleDelete = (gasto) => {
    deleteGasto(gasto.id)
  }
  return (
    <div className='bg-gray-50 p-4 ml-72'>
      <h1 className='text-2xl font-bold mb-4'>Gastos</h1>
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
          {sortedGastos.map((gasto) => (
            <tr key={gasto.id} className='hover:bg-gray-200'>
              <td className='border px-4 py-2 text-center'>
                {gasto.placaVehiculo}
              </td>
              <td className='border px-4 py-2 text-center'>
                {gasto.fecha}
              </td>
              <td className='border px-4 py-2 text-center'>
                {gasto.descripcion}
              </td>
              <td className='border px-4 py-2 text-center'>
                {gasto.costo}
              </td>
              <td className='border px-4 py-2 text-center'>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4'
                  onClick={() => handleDelete(gasto)}
                >
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

export default Gastos
