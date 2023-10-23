import { GET_ALL_VEHICULOS } from '../constants.js'
import axios from 'axios'

export const getAllVehiculos = () => {
  return axios
    .get(GET_ALL_VEHICULOS)
    .then((res) => res.data)
    .then((data) => {
      return data.data
    })
}

export const deleteVehiculo = (placa) => {
  return axios.delete(`${GET_ALL_VEHICULOS}/${placa}`)
}
