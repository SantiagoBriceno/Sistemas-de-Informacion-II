import { pool } from '../db.js'

const getConductores = async () => {
  const [data] = await pool.query('SELECT * FROM conductor')
  return data
}

const getConductor = async (id) => {
  const [data] = await pool.query('SELECT * FROM conductor WHERE id = ?', [id])
  return data
}

export default {
  getConductores,
  getConductor
}
