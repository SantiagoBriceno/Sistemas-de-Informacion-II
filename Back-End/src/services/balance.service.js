import { pool } from '../db.js'

// Metodo que devuelve todos los gastos de un vehiculo en especifico entre dos fechas seleccionadas
const getBalance = async (placa, fechaInicio, fechaFin) => {
  const [data] = await pool.query('SELECT * FROM gasto WHERE placa = ? AND fecha BETWEEN ? AND ?', [placa, fechaInicio, fechaFin])
  return data
}

export default {
  getBalance
}
