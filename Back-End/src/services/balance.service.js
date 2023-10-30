import { pool } from '../db.js'

// Metodo que devuelve todos los gastos de un vehiculo en especifico entre dos fechas seleccionadas
// const getBalance = async (placaVehiculo, fechaInicio, fechaFin) => {
//   const [data] = await pool.query('SELECT * FROM gasto WHERE placaVehiculo = ? AND fecha BETWEEN ? AND ?', [placaVehiculo, fechaInicio, fechaFin])
//   return data
// }

// Metodo que devuelve todos los gastos y beneficios de un vehiculo en especifico entre dos fechas seleccionadas
const getBalance = async (placa) => {
  const [data1] = await pool.query('SELECT placa, marca, modelo, SUM(viajes.costo) AS ingresos, SUM(gasto.costo) AS gastos FROM `vehiculo` INNER JOIN gasto ON vehiculo.placa = gasto.placaVehiculo INNER JOIN viajes ON gasto.placaVehiculo = viajes.placaVehiculo WHERE placa = ?', [placa])
  return data1
}

export default {
  getBalance
}
