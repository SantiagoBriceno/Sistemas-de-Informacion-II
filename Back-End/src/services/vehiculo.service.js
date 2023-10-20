import { pool } from '../db.js'

const getVehiculos = async () => {
  const [data] = await pool.query('SELECT * FROM vehiculo')
  return data
}

const getVehiculo = async (id) => {
  const [data] = await pool.query('SELECT * FROM vehiculo WHERE id = ?', [id])
  return data
}

const createVehiculo = async (vehiculo) => {
  const [data] = await pool.query('INSERT INTO vehiculo SET ?', [vehiculo])
  return data
}

const editVehiculo = async (id, vehiculo) => {
  const [data] = await pool.query('UPDATE vehiculo SET ? WHERE id = ?', [vehiculo, id])
  return data
}

export default {
  getVehiculos,
  getVehiculo,
  createVehiculo,
  editVehiculo
}
