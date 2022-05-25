import { ChakraProvider } from '@chakra-ui/react'
import PlaceContextProvider from '../context/PlaceContextProvider'
import TemperatureContextProvider from '../context/TemperatureContextProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PlaceContextProvider>
        <TemperatureContextProvider>
          <Component {...pageProps} />
        </TemperatureContextProvider>
      </PlaceContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
