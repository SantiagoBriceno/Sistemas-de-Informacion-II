import { pool } from '../db.js'

const getVehiculos = async () => {
  const [data] = await pool.query('SELECT * FROM vehiculo')
  return data
}

const getVehiculo = async (placa) => {
  const [data] = await pool.query('SELECT * FROM vehiculo WHERE placa = ?', [placa])
  return data
}

const createVehiculo = async (vehiculo) => {
  const [data] = await pool.query('INSERT INTO vehiculo SET ?', [vehiculo])
  return data
}

const editVehiculo = async (placa, vehiculo) => {
  const [data] = await pool.query('UPDATE vehiculo SET ? WHERE placa = ?', [vehiculo, placa])
  return data
}

const deleteVehiculo = async (placa) => {
  const [data] = await pool.query('DELETE FROM vehiculo WHERE placa = ?', [placa])
  return data
}

export default {
  getVehiculos,
  getVehiculo,
  createVehiculo,
  editVehiculo,
  deleteVehiculo
}
