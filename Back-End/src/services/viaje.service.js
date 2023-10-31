import { pool } from '../db.js'

const getViajes = async () => {
  const [data] = await pool.query('SELECT * FROM viajes')
  return data
}

const getViaje = async (id) => {
  const [data] = await pool.query('SELECT * FROM viajes WHERE id = ?', [id])
  return data
}

const createViaje = async (viaje) => {
  const [data] = await pool.query('INSERT INTO viajes SET ?', [viaje])
  // SUMAMOS UN VIAJE A LOS VIAJES DEL VEHICULO
  await pool.query('UPDATE vehiculo SET viajesRealizados = viajesRealizados + 1 WHERE placa = ?', [viaje.placaVehiculo])
  // SUMAMOS UN VIAJE A LOS VIAJES DEL CONDUCTOR
  await pool.query('UPDATE conductor SET viajesRealizados = viajesRealizados + 1 WHERE id = ?', [viaje.idConductor])
  return data
}

const editViaje = async (id, viaje) => {
  const [data] = await pool.query('UPDATE viajes SET ? WHERE id = ?', [
    viaje,
    id
  ])
  return data
}

const deleteViaje = async (id) => {
  const [data] = await pool.query('DELETE FROM viajes WHERE id = ?', [id])
  return data
}

const getViajeVehiculoAndConductor = async () => {
  const [data] = await pool.query('SELECT ubicacion, distancia, fechaInicio, marca, modelo, nombre FROM viajes INNER JOIN vehiculo ON placaVehiculo = vehiculo.placa INNER JOIN conductor ON vehiculo.cedulaConductor = conductor.cedula LIMIT 5')
  return data
}

export default {
  getViajes,
  getViaje,
  createViaje,
  editViaje,
  deleteViaje,
  getViajeVehiculoAndConductor
}
