import { GET_REPORT } from '../constants.js'
import axios from 'axios'

export const getReportOf = (placa) => {
  return axios.post(GET_REPORT, { placa })
    .then((res) => res.data)
    .then((data) => {
      return data.data
    })
}
