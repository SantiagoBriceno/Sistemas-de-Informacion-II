import { useReporte } from '../../hooks/useReporte.js'
function Reporte ({ placa, visualizar }) {
  const { reportData } = useReporte(placa, visualizar)
  return (
    <div className='bg-gray-50 p-4 flex flex-col justify-center content-center items-center'>
      <h1 className='text-2xl font-bold mb-4'>Reportes</h1>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='px-4 py-2 text-center cursor-pointer'>
              Placa
            </th>
            <th className='px-4 py-2 text-center cursor-pointer'>
              Marca
            </th>
            <th className='px-4 py-2 text-center cursor-pointer'>
              Modelo
            </th>
            <th className='px-4 py-2 text-center cursor-pointer'>
              Ingresos
            </th>
            <th className='px-4 py-2 text-center cursor-pointer'>
              Gastos
            </th>
          </tr>
        </thead>
        <tbody>
          <tr key={reportData.placa} className='hover:bg-gray-200'>
            <td className='border px-4 py-2 text-center'>
              {reportData.placa}
            </td>
            <td className='border px-4 py-2 text-center'>
              {reportData.marca}
            </td>
            <td className='border px-4 py-2 text-center'>
              {reportData.modelo}
            </td>
            <td className='border px-4 py-2 text-center'>
              {reportData.ingresos} Bs
            </td>
            <td className='border px-4 py-2 text-center'>
              {reportData.gastos} Bs
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Reporte
