import { ChakraProvider } from '@chakra-ui/react'
import FavoriteContextProvider from '../context/FavoriteContextProvider'
import PlaceContextProvider from '../context/PlaceContextProvider'
import TemperatureContextProvider from '../context/TemperatureContextProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PlaceContextProvider>
        <TemperatureContextProvider>
          <FavoriteContextProvider>
            <Component {...pageProps} />
          </FavoriteContextProvider>
        </TemperatureContextProvider>
      </PlaceContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
