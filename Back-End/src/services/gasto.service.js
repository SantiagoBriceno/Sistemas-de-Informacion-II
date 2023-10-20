import { pool } from '../db.js'

export const getGastos = async () => {
  const [data] = await pool.query('SELECT * FROM gasto')
  return data
}

export const getGasto = async (id) => {
  const [data] = await pool.query('SELECT * FROM gasto WHERE id = ?', [id])
  return data
}

export default {
  getGastos,
  getGasto
}
