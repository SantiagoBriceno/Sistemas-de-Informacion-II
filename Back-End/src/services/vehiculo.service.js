import { pool } from '../db.js'

const getVehiculos = async () => {
  const [data] = await pool.query('SELECT * FROM vehiculo')
  return data
}

const getVehiculo = async (placa) => {
  const [data] = await pool.query('SELECT * FROM vehiculo WHERE placa = ?', [placa])
  return data
}

const getPlacas = async () => {
  const [data] = await pool.query('SELECT placa FROM vehiculo')
  console.log(data)
  return data
}

const createVehiculo = async (vehiculo) => {
  vehiculo.viajesRealizados = 0
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

const getVehiculoAndConductor = async () => {
  const [data] = await pool.query('SELECT placa, marca, modelo, conductor.nombre FROM vehiculo INNER JOIN conductor ON cedulaConductor = conductor.cedula')
  return data
}

export default {
  getVehiculos,
  getVehiculo,
  createVehiculo,
  editVehiculo,
  deleteVehiculo,
  getPlacas,
  getVehiculoAndConductor
}
