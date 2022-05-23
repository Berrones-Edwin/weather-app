import { useEffect, useState } from 'react'

export const useGeolocation = () => {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 })
  const [error, setError] = useState(null)

  function showPosition(position) {
    const { latitude, longitude } = position.coords

    setCoords({
      lat: latitude,
      lon: longitude
    })
  }

  function handleError(error){
   
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError('User denied the request for Geolocation.')
        break;
      case error.POSITION_UNAVAILABLE:
        setError('Location information is unavailable.')
        break;
      case error.TIMEOUT:
        setError('The request to get user location timed out.')
        break;
      case error.UNKNOWN_ERROR:
        setError('An unknown error occurred.')
        break;
      default:
        setError('An unknown error occurred.')
    }

  }

  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition,handleError)
    }else{
        setError("Geolocation is not supported by this browser")
    }
  }, [])

  return {
    coords,
    error
  }
}
