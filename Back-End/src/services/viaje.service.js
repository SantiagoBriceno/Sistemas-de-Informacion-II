import { pool } from '../db.js'

const getGastos = async () => {
  const [data] = await pool.query('SELECT * FROM gasto')
  return data
}

const getGasto = async (id) => {
  const [data] = await pool.query('SELECT * FROM gasto WHERE id = ?', [id])
  return data
}

const createGasto = async (gasto) => {
  const [data] = await pool.query('INSERT INTO gasto SET ?', [gasto])
  return data
}

const editGasto = async (id, gasto) => {
  const [data] = await pool.query('UPDATE gasto SET ? WHERE id = ?', [gasto, id])
  return data
}

const deleteGasto = async (id) => {
  const [data] = await pool.query('DELETE FROM gasto WHERE id = ?', [id])
  return data
}

export default {
  getGastos,
  getGasto,
  createGasto,
  editGasto,
  deleteGasto
}
