import { Router } from 'express'
import { getGasto, getGastos, createGasto, editGasto, deleteGasto } from '../controller/gasto.controllers.js'
const router = Router()

// RUTA PARA OBETENER TODOS LOS GASTOS DE LA BASE DE DATOS
router.get('/', getGastos)

// RUTA PARA OBTENER UN GASTO DE LA BASE DE DATOS
router.get('/:id', getGasto)

// RUTA PARA CREAR UN NUEVO GASTO EN LA BASE DE DATOS
router.post('/', createGasto)

// RUTA PARA EDITAR UN GASTO EN LA BASE DE DATOS
router.patch('/:id', editGasto)

router.delete('/:id', deleteGasto)

export default router
