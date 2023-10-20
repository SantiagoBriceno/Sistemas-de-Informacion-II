import { Router } from 'express'
import { getConductor, getConductores } from '../controller/conductor.controllers.js'

const router = Router()

// RUTA PARA OBETENER TODOS LOS CHOFERES DE LA BASE DE DATOS
router.get('/', getConductores)

// RUTA PARA OBTENER UN CHOFER DE LA BASE DE DATOS
router.get('/:id', getConductor)

export default router
