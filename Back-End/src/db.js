import { createPool } from 'mysql2/promise'
import {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE
} from './config'

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
})
