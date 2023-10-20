import { pool } from '../db.js'

const getVehiculos = async () => {
  const [data] = await pool.query('SELECT * FROM vehiculo')
  return data
}

const getVehiculo = async (id) => {
  const [data] = await pool.query('SELECT * FROM vehiculo WHERE id = ?', [id])
  return data
}

export default {
  getVehiculos,
  getVehiculo
}
