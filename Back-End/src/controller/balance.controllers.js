import service from '../services/balance.service.js'

// Metodo que retorna la data del servicio correspondiente
// Llega en el req.body el id del vehiculo y las fechas de inicio y fin de los gastos
export const getBalance = async (req, res) => {
  try {
    console.log('fechaInicio', req.body.fechaInicio, 'fechaFin', req.body.fechaFin)
    const data = await service.getBalance(req.body.placaVehiculo, req.body.fechaInicio, req.body.fechaFin)
    data.forEach(element => {
      element.fecha = element.fecha.toISOString().slice(0, 10)
    }
    )
    if (data) {
      res.send({
        status: 200,
        data
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
