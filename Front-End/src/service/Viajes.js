import { GET_ALL_VIAJES } from '../constants.js'
import axios from 'axios'
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()

  return `${day}-${month}-${year}`
}
export const getAllViajes = () => {
  return axios.get(GET_ALL_VIAJES)
    .then(res => res.data)
    .then(data => {
      data.data.forEach(viaje => {
        viaje.fecha = formatDate(viaje.fecha)
      })
      return data.data
    })
}
