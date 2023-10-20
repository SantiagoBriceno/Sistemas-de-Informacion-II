import service from '../services/vehiculo.service.js'

export const getVehiculos = async (req, res) => {
  try {
    const vehiculos = await service.getVehiculos()
    if (vehiculos) {
      res.send({
        status: 200,
        data: vehiculos
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se encontraron vehiculos'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL OBTENER LOS VEHICULOS'
    })
  }
}

export const getVehiculo = async (req, res) => {
  try {
    const vehiculo = await service.getVehiculo(req.params.placa)
    if (vehiculo) {
      res.send({
        status: 200,
        data: vehiculo
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se encontro el vehiculo'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL OBTENER EL VEHICULO INDICADO'
    })
  }
}

export const createVehiculo = async (req, res) => {
  try {
    const vehiculo = await service.createVehiculo(req.body)
    if (vehiculo) {
      res.send({
        status: 200,
        data: vehiculo
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se pudo crear el vehiculo'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL CREAR EL VEHICULO'
    })
  }
}

export const editVehiculo = async (req, res) => {
  try {
    const vehiculo = await service.editVehiculo(req.params.placa, req.body)
    if (vehiculo) {
      res.send({
        status: 200,
        data: vehiculo
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se pudo editar el vehiculo'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL EDITAR EL VEHICULO'
    })
  }
}
