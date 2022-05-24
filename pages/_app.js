import { ChakraProvider } from '@chakra-ui/react'
import PlaceContextProvider from '../context/PlaceContextProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PlaceContextProvider>
        <Component {...pageProps} />
      </PlaceContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
