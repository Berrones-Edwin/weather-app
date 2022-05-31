import { ChakraProvider } from '@chakra-ui/react'
import FavoriteContextProvider from '../context/FavoriteContextProvider'
import PlaceContextProvider from '../context/PlaceContextProvider'
import TemperatureContextProvider from '../context/TemperatureContextProvider'
import '../styles/globals.css'
import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'

function MyApp({ Component, pageProps }) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  )
  
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
