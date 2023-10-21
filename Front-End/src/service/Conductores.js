import { GET_ALL_CONDUCTORES } from '../constants.js'
import axios from 'axios'

export const getAllConductores = () => {
  return axios.get(GET_ALL_CONDUCTORES)
    .then(res => res.data)
    .then(data => {
      return data.data
    })
}
