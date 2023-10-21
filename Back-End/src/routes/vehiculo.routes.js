import { Router } from 'express'
import { getVehiculo, getVehiculos, createVehiculo, editVehiculo, deleteVehiculo } from '../controller/vehiculo.controllers.js'

const router = Router()

// RUTA PARA OBETENER TODOS LOS VEHICULOS DE LA BASE DE DATOS
router.get('/', getVehiculos)

// RUTA PARA OBTENER UN VEHICULO DE LA BASE DE DATOS
router.get('/:id', getVehiculo)

// RUTA PARA CREAR UN NUEVO VEHICULO EN LA BASE DE DATOS
router.post('/', createVehiculo)

// RUTA PARA EDITAR UN VEHICULO EN LA BASE DE DATOS
router.patch('/:id', editVehiculo)

router.delete('/:id', deleteVehiculo)

export default router
