import { pool } from '../db.js'

// Metodo que devuelve todos los gastos de un vehiculo en especifico entre dos fechas seleccionadas Y la du
const getBalance = async (placaVehiculo, fechaInicio, fechaFin) => {
  const [data] = await pool.query('SELECT * FROM gasto WHERE placaVehiculo = ? AND fecha BETWEEN ? AND ?', [placaVehiculo, fechaInicio, fechaFin])
  return data
}

export default {
  getBalance
}
