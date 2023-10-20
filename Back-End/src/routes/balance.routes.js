import { Router } from 'express'
import { getBalance } from '../controller/balance.controllers.js'

const router = Router()

// RUTA PARA OBTENER TODOS LOS GASTOS Y GANANCIAS DE UN VEHICULO EN UN RANGO DE FECHAS
router.post('/', getBalance)

// RUTA PARA OBTENER TODOS LOS GASTOS Y GANANCIAS DE UN VEHICULO EN TODA SU HISTORIA

export default router
