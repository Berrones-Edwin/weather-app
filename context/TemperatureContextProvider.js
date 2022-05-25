import { createContext, useState } from 'react'

export const TemperatureConext = createContext(null)

const TemperatureContextProvider = ({ children }) => {
  const [temperature, setTemperature] = useState('°C')
  return (
    <TemperatureConext.Provider
      value={{
        temperature,
        setTemperature
      }}
    >
      {children}
    </TemperatureConext.Provider>
  )
}

export default TemperatureContextProvider
