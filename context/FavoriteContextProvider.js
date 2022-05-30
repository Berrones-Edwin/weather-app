import { createContext, useState, useEffect } from 'react'
import { getData } from '../utils/localstorage'

export const FavoriteContext = createContext(null)

const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(null)

  useEffect(() => {
    setFavorites(getData('favorites'))
  }, [setFavorites])
  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContextProvider
