import { createContext, useState, useEffect } from 'react'
import { getData } from '../utils/localstorage'

export const PlaceContext = createContext(null)

const PlaceContextProvider = ({ children }) => {
  const [place, setPlace] = useState('')

  useEffect(() => {
    setPlace(getData('searches'))
  }, [setPlace])
  return (
    <PlaceContext.Provider value={{ place, setPlace }}>
      {children}
    </PlaceContext.Provider>
  )
}

export default PlaceContextProvider
