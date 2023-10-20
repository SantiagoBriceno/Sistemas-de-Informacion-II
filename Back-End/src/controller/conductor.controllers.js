import service from '../services/conductor.service.js'

export const getConductores = async (req, res) => {
  try {
    const conductores = await service.getConductores()
    if (conductores) {
      res.send({
        status: 200,
        data: conductores
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se encontraron conductores'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL OBTENER LOS CONDUCTORES'
    })
  }
}

export const getConductor = async (req, res) => {
  try {
    const conductor = await service.getConductor(req.params.id)
    if (conductor) {
      res.send({
        status: 200,
        data: conductor
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se encontro el conductor'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL OBTENER EL CONDUCTOR INDICADO'
    })
  }
}

export const createConductor = async (req, res) => {
  try {
    const conductor = await service.createConductor(req.body)
    if (conductor) {
      res.send({
        status: 200,
        data: conductor
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se pudo crear el conductor'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL CREAR EL CONDUCTOR'
    })
  }
}

export const editConductor = async (req, res) => {
  try {
    const conductor = await service.editConductor(req.params.id, req.body)
    if (conductor) {
      res.send({
        status: 200,
        data: conductor
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se pudo editar el conductor'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL EDITAR EL CONDUCTOR'
    })
  }
}
