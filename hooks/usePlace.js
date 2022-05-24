import { useContext } from 'react'
import { PlaceContext } from '../context/PlaceContextProvider'

export const usePlace = () => {
  const { place, setPlace } = useContext(PlaceContext)
  return { place, setPlace }
}
