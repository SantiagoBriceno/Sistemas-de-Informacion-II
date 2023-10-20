import { Router } from 'express'
import { getGasto, getGastos, createGasto, editGasto } from '../controller/gasto.controllers.js'

const router = Router()

// RUTA PARA OBETENER TODOS LOS GASTOS DE LA BASE DE DATOS
router.get('/', getGastos)

// RUTA PARA OBTENER UN GASTO DE LA BASE DE DATOS
router.get('/:id', getGasto)

router.post('/', createGasto)

router.patch('/:id', editGasto)

export default router
