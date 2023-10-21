import { pool } from '../db.js'

// Metodo que devuelve todos los gastos de un vehiculo en especifico entre dos fechas seleccionadas
// const getBalance = async (placaVehiculo, fechaInicio, fechaFin) => {
//   const [data] = await pool.query('SELECT * FROM gasto WHERE placaVehiculo = ? AND fecha BETWEEN ? AND ?', [placaVehiculo, fechaInicio, fechaFin])
//   return data
// }

// Metodo que devuelve todos los gastos y beneficios de un vehiculo en especifico entre dos fechas seleccionadas
const getBalance = async (placaVehiculo, fechaInicio, fechaFin) => {
  const [data1] = await pool.query('SELECT * FROM gasto WHERE placaVehiculo = ? AND fecha BETWEEN ? AND ?', [placaVehiculo, fechaInicio, fechaFin])
  const [data2] = await pool.query('SELECT * FROM viajes WHERE placaVehiculo = ? AND fechaFin BETWEEN ? AND ?', [placaVehiculo, fechaInicio, fechaFin])
  return {
    gastos: data1,
    viajes: data2
  }
}

export default {
  getBalance
}
