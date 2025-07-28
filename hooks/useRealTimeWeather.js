import { useEffect, useState } from 'react'
import { getRealTimeWeather } from '../services/getRealTimeWeather'
import { useGeolocation } from './useGeolocation'

export const useRealTimeWeather = (location) => {
  const [response, setResponse] = useState(null)
  const [errorResponse, setErrorResponse] = useState(null)
  const {
    coords: { lat, lon },
    error
  } = useGeolocation()

  useEffect(() => {
    let params = location ? location : { lat, lon }
    if (error) {
      setErrorResponse(error)
      return
    }
    getRealTimeWeather(params)
      .then((res) => {
        setResponse(res)
      })
      .catch((err) => {
        setError(err)
      })
  }, [error, location, lat, lon])

  return { response, errorResponse }
}
