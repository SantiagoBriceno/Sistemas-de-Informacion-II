import { useState } from 'react'

const sortedEnt = (entity, sortConfig) => {
  return entity.sort((a, b) => {
    if (sortConfig.direction === 'ascending') {
      if (a[sortConfig.key] < b[sortConfig.key]) return -1
      if (a[sortConfig.key] > b[sortConfig.key]) return 1
    } else if (sortConfig.direction === 'descending') {
      if (a[sortConfig.key] > b[sortConfig.key]) return -1
      if (a[sortConfig.key] < b[sortConfig.key]) return 1
    }
    return 0
  })
}

const useSortedEntity = (entity) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: '' })

  const handleSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  const sortedEntity = sortedEnt(entity, sortConfig)

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'ascending') {
        return <span>&#9650;</span> // Up arrow
      } else if (sortConfig.direction === 'descending') {
        return <span>&#9660;</span> // Down arrow
      }
    }
    return null
  }

  return { sortedEntity, handleSort, getSortIndicator }
}

export { useSortedEntity }
