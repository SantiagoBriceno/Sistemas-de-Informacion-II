import { Router } from 'express'
import {
  getVehiculo,
  getVehiculos,
  createVehiculo,
  editVehiculo,
  deleteVehiculo,
  getPlacas,
  getVehiculoAndConductor
} from '../controller/vehiculo.controllers.js'

const router = Router()

// RUTA PARA OBETENER TODOS LOS VEHICULOS DE LA BASE DE DATOS
router.get('/', getVehiculos)

// RUTA PARA OBTENER UN VEHICULO DE LA BASE DE DATOS
router.get('/:placa', getVehiculo)

// RUTA PARA OBTENER TODAS LAS PLACAS DE LOS VEHICULOS DE LA BASE DE DATOS
router.get('/id/placas', getPlacas)

// RUTA PARA OBTENER TODOS LOS VEHICULOS CON SU RESPECTIVO CONDUCTOR
router.get('/id/Conductor', getVehiculoAndConductor)

// RUTA PARA CREAR UN NUEVO VEHICULO EN LA BASE DE DATOS
router.post('/', createVehiculo)

// RUTA PARA EDITAR UN VEHICULO EN LA BASE DE DATOS
router.patch('/:placa', editVehiculo)

router.delete('/:placa', deleteVehiculo)

export default router
