import { pool } from '../db.js'

const getConductores = async () => {
  const [data] = await pool.query('SELECT * FROM conductor')
  return data
}

const getConductor = async (id) => {
  const [data] = await pool.query('SELECT * FROM conductor WHERE id = ?', [id])
  return data
}

const createConductor = async (conductor) => {
  const [data] = await pool.query('INSERT INTO conductor SET ?', [conductor])
  return data
}

const editConductor = async (id, conductor) => {
  const [data] = await pool.query('UPDATE conductor SET ? WHERE id = ?', [conductor, id])
  return data
}

export default {
  getConductores,
  getConductor,
  createConductor,
  editConductor
}
