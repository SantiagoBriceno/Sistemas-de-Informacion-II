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