import { useContext } from 'react'
import { FavoriteContext } from '../context/FavoriteContextProvider'
export const useFavorites = () => {
  const { favorites, setFavorites } = useContext(FavoriteContext)
  return { favorites, setFavorites }
}
