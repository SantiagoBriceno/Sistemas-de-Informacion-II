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
