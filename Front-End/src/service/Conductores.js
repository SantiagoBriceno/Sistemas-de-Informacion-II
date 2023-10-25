import { GET_ALL_CEDULAS, GET_ALL_CONDUCTORES } from '../constants.js'
import axios from 'axios'

export const getAllConductores = () => {
  return axios
    .get(GET_ALL_CONDUCTORES)
    .then((res) => res.data)
    .then((data) => {
      return data.data
    })
}

export const deleteConductor = (id) => {
  return axios.delete(`${GET_ALL_CONDUCTORES}/${id}`)
}

export const getCedulas = () => {
  return axios
    .get(GET_ALL_CEDULAS)
    .then((res) => res.data)
    .then((data) => {
      return data.data
    })
}

export const createConductor = (conductor) => {
  console.log(conductor)
  return axios.post(GET_ALL_CONDUCTORES, conductor)
}
