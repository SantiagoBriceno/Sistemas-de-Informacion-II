import service from '../services/gasto.service.js'

export const getGastos = async (req, res) => {
  try {
    const gastos = await service.getGastos()
    if (gastos) {
      res.send({
        status: 200,
        data: gastos
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se encontraron gastos'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL OBTENER LOS GASTOS'
    })
  }
}

export const getGasto = async (req, res) => {
  try {
    const gasto = await service.getGasto(req.params.id)
    if (gasto) {
      res.send({
        status: 200,
        data: gasto
      })
    } else {
      res.status(404).send({
        status: 404,
        message: 'No se encontro el gasto'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL OBTENER EL GASTO INDICADO'
    })
  }
}

export const createGasto = async (req, res) => {
  try {
    const gasto = await service.createGasto(req.body)
    if (gasto) {
      res.send({
        status: 200,
        data: gasto
      })
    } else {
      res.status(400).send({
        status: 400,
        message: 'No se pudo crear el gasto'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL CREAR EL GASTO'
    })
  }
}

export const editGasto = async (req, res) => {
  try {
    const gasto = await service.editGasto(req.params.id, req.body)
    if (gasto) {
      res.send({
        status: 200,
        data: gasto
      })
    } else {
      res.status(400).send({
        status: 400,
        message: 'No se pudo editar el gasto'
      })
    }
  } catch (e) {
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL EDITAR EL GASTO'
    })
  }
}
