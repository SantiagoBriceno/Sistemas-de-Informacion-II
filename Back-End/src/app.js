import express from 'express'
import cors from 'cors'
import conductorRouter from './routes/conductor.routes.js'
import vehiculoRouter from './routes/vehiculo.routes.js'
import gastoRouter from './routes/gasto.routes.js'
import viajeRouter from './routes/viaje.routes.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/conductores', conductorRouter)
app.use('/api/vehiculos', vehiculoRouter)
app.use('/api/gastos', gastoRouter)
app.use('/api/viajes', viajeRouter)

export default app
