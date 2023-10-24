import React, { useState, useEffect } from 'react'
import axios from 'axios';



function MainCard () {
  
  const [vehiculos, setVehiculos] = useState([]);
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/vehiculos/id/conductor')
      .then((res)=> {
        setVehiculos(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
    
    axios.get('http://localhost:3000/api/viajes/id/vehiculoConductor')
      .then((res)=> {
				const viajes = res.data.data.map((viaje) => ({
					...viaje,
					fechaInicio: formatDate(viaje.fechaInicio),
				}));
				setViajes(viajes);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, "0");
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const year = date.getFullYear().toString();

		return `${day}-${month}-${year}`;
	};
  

  return (
    <div className='container'>
      <div className='bg-gray-50 p-4'>
        
        <div className='table-container'>
          <h1 className='text-2xl font-bold mb-4'>Ultimos viajes</h1>
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
                    {viaje.distancia}
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
      <div className='bg-gray-50 p-4'>
        <div className='table-container'>
          <h1 className='text-2xl font-bold mb-4'>Vehiculos con conductor asignado</h1>
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
  )
}

export default MainCard
