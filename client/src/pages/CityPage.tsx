import React from 'react'
import { useParams } from 'react-router-dom'

export const CityPage = () => {
  const { city } = useParams()
  return <h2>Prognoza pogody dla: {city}</h2>
}
