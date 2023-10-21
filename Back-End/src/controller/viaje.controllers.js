import service from '../services/viaje.service.js'

export const getViajes = async (req, res) => {
  try {
    const viajes = await service.getViajes()
    if (viajes) {
      res.send({
        status: 200,
        data: viajes
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se encontraron viajes'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL OBTENER LOS VIAJES'
    })
  }
}

export const getViaje = async (req, res) => {
  try {
    const viaje = await service.getViaje(req.params.id)
    if (viaje) {
      res.send({
        status: 200,
        data: viaje
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se encontro el viaje'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL OBTENER EL VIAJE INDICADO'
    })
  }
}

export const createViaje = async (req, res) => {
  try {
    const viaje = await service.createViaje(req.body)
    if (viaje) {
      res.send({
        status: 200,
        data: viaje
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se pudo crear el viaje'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL CREAR EL VIAJE'
    })
  }
}

export const editViaje = async (req, res) => {
  try {
    const viaje = await service.editViaje(req.params.id, req.body)
    if (viaje) {
      res.send({
        status: 200,
        data: viaje
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se pudo editar el viaje'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL EDITAR EL VIAJE'
    })
  }
}

export const deleteViaje = async (req, res) => {
  try {
    const viaje = await service.deleteViaje(req.params.id)
    if (viaje) {
      res.send({
        status: 200,
        data: viaje
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se pudo eliminar el viaje'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL ELIMINAR EL VIAJE'
    })
  }
}
