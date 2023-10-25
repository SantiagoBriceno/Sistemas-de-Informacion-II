import service from '../services/balance.service.js'

// Metodo que retorna la data del servicio correspondiente
// Llega en el req.body el id del vehiculo y las fechas de inicio y fin de los gastos
export const getBalance = async (req, res) => {
  try {
    const data = await service.getBalance(req.body.placaVehiculo)
    console.log(data)
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
    console.log(e)
    res.status(500).send({
      status: 'ERROR',
      message: 'OPS! ERROR AL OBTENER LOS GASTOS'
    })
  }
}
