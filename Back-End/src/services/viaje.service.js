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

export default {
  getViajes,
  getViaje,
  createViaje,
  editViaje,
  deleteViaje
}
