import { GET_ALL_VIAJES, GET_ALL_VEHICULOS_PLACAS } from '../constants.js'
import axios from 'axios'
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()

  return `${day}-${month}-${year}`
}
export const getAllViajes = () => {
  return axios
    .get(GET_ALL_VIAJES)
    .then((res) => res.data)
    .then((data) => {
      data.data.forEach((viaje) => {
        viaje.fechaInicio = formatDate(viaje.fechaInicio)
        viaje.fechaFin = formatDate(viaje.fechaFin)
      })
      return data.data
    })
}

export const deleteViaje = (id) => {
  return axios.delete(`${GET_ALL_VIAJES}/${id}`)
}

export const createViaje = (viaje) => {
  return axios.post(GET_ALL_VIAJES, viaje)
}

export const getPlacas = () => {
  return axios
    .get(GET_ALL_VEHICULOS_PLACAS)
    .then((res) => res.data)
    .then((data) => data.data)
}
