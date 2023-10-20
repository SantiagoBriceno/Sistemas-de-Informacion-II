import { Router } from 'express'
import { getVehiculo, getVehiculos } from '../controller/vehiculo.controllers.js'

const router = Router()

// RUTA PARA OBETENER TODOS LOS VEHICULOS DE LA BASE DE DATOS
router.get('/', getVehiculos)

// RUTA PARA OBTENER UN VEHICULO DE LA BASE DE DATOS
router.get('/:id', getVehiculo)

export default router
