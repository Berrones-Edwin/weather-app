import { useContext } from 'react'
import { TemperatureConext } from '../context/TemperatureContextProvider'

export const useTemperature = () => {
  const { temperature, setTemperature } = useContext(TemperatureConext)
  return { temperature, setTemperature }
}
