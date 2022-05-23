import { useEffect, useState } from 'react'
import { getRealTimeWeather } from '../services/getRealTimeWeather'
import { useGeolocation } from './useGeolocation'

export const useRealTimeWeather = () => {
  const [response, setResponse] = useState(null)
  const [errorResponse, setErrorResponse] = useState(null)
  const {
    coords: { lat, lon },
    error
  } = useGeolocation()

  useEffect(() => {
    if (error) {
      setErrorResponse(error)
      return
    }
    getRealTimeWeather({ lat, lon })
      .then((res) => {
        setResponse(res)
      })
      .catch((err) => {
        setError(err)
      })
  }, [lat, lon, error])

  return { response, errorResponse }
}
