import { createContext, useState } from 'react'

export const PlaceContext = createContext(null)

const PlaceContextProvider = ({ children }) => {
  const [place, setPlace] = useState('london')

  return (
    <PlaceContext.Provider value={{ place, setPlace }}>
      {children}
    </PlaceContext.Provider>
  )
}

export default PlaceContextProvider
