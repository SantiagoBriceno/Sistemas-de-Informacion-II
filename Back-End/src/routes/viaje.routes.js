import { Router } from 'express'
import {
  getViajes,
  getViaje,
  createViaje,
  editViaje,
  deleteViaje
} from '../controller/viaje.controllers.js'
const router = Router()

// RUTA PARA OBETENER TODOS LOS GASTOS DE LA BASE DE DATOS
router.get('/', getViajes)

// RUTA PARA OBTENER UN GASTO DE LA BASE DE DATOS
router.get('/:id', getViaje)

// RUTA PARA CREAR UN NUEVO GASTO EN LA BASE DE DATOS
router.post('/', createViaje)

// RUTA PARA EDITAR UN GASTO EN LA BASE DE DATOS
router.patch('/:id', editViaje)

router.delete('/:id', deleteViaje)

export default router
