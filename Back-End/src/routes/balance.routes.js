import { Router } from 'express'
import { getBalance } from '../controller/balance.controllers.js'

const router = Router()

// RUTA PARA OBTENER TODOS LOS GASTOS DE UN VEHICULO EN UN RANGO DE FECHAS
router.post('/', getBalance)

export default router
