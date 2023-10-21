import { Router } from 'express'
import { getConductor, getConductores, createConductor, editConductor, deleteConductor } from '../controller/conductor.controllers.js'

const router = Router()

// RUTA PARA OBETENER TODOS LOS CHOFERES DE LA BASE DE DATOS
router.get('/', getConductores)

// RUTA PARA OBTENER UN CHOFER DE LA BASE DE DATOS
router.get('/:cedula', getConductor)

// RUTA PARA CREAR UN NUEVO CHOFER EN LA BASE DE DATOS
router.post('/', createConductor)

router.patch('/:cedula', editConductor)

// RUTA PARA ELIMINAR UN CHOFER DE LA BASE DE DATOS
router.delete('/:cedula', deleteConductor)

export default router
