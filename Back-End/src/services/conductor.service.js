import { pool } from '../db.js'

const getConductores = async () => {
  const [data] = await pool.query('SELECT * FROM conductor')
  return data
}

const getConductor = async (cedula) => {
  const [data] = await pool.query('SELECT * FROM conductor WHERE cedula = ?', [cedula])
  return data
}

const createConductor = async (conductor) => {
  const [data] = await pool.query('INSERT INTO conductor SET ?', [conductor])
  return data
}

const editConductor = async (cedula, conductor) => {
  const [data] = await pool.query('UPDATE conductor SET ? WHERE cedula = ?', [conductor, cedula])
  return data
}

export default {
  getConductores,
  getConductor,
  createConductor,
  editConductor
}
