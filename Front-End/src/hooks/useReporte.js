import { useEffect, useState } from 'react'
import { getReportOf } from '../service/Reporte.js'

export const useReporte = (placa) => {
  const [reportData, setReportData] = useState([])

  const getReportData = () => {
    getReportOf(placa)
      .then((res) => {
        setReportData(res)
      })
  }

  useEffect(() => { getReportData() }
    , [placa])

  return {
    reportData,
    getReportData
  }
}
