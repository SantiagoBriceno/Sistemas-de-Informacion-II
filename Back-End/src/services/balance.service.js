import { pool } from '../db.js'

// Metodo que devuelve todos los gastos de un vehiculo en especifico entre dos fechas seleccionadas
const getBalance = async (id, fechaInicio, fechaFin) => {
  const [data] = await pool.query('SELECT * FROM gasto WHERE vehiculo_id = ? AND fecha BETWEEN ? AND ?', [id, fechaInicio, fechaFin])
  return data
}

export default {
  getBalance
}
