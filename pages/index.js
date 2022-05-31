import { Stack, Heading } from '@chakra-ui/react'
import { usePlace } from '../hooks/usePlace'
import { useRealTimeWeather } from '../hooks/useRealTimeWeather'
import { HeadComponent } from '../components/Head'
import SideBar from '../components/SideBar'
import NextDayGrid from '../components/NextDayGrid'
import Hightlights from '../components/Hightlights'
import NavBar from '../components/NavBar'
import SkeletonIndex from '../components/SkeletonIndex'
import WeatherPerHour from '../components/WeatherPerHour'
import CurrentChart from '../components/CurrentChart'
// import CurrentChart from '../components/CurrentChart'

export default function Home() {
  const { place } = usePlace()
  const { response, errorResponse } = useRealTimeWeather(place)

  if (errorResponse) {
    ;<p>Error</p>
  }

  if (response === null) {
    return (
      <Stack
        flexDir={'row'}
        justifyContent="center"
        alignItems={'center'}
        w="100vw"
        h="100vh"
      >
        <p>Loading...</p>
      </Stack>
    )
  }

  const {
    location,
    current,
    forecast: { forecastday },
    alerts: { alert }
  } = response

  return (
    <>
      <HeadComponent />
      <Stack
        as="main"
        minW={'100vw'}
        minHeight={'100vh'}
        flexDir={{
          base: 'column',
          md: 'row'
        }}
      >
        <SideBar current={current} location={location} />
        <Stack as="section" width={'100%'} bgColor="#100E1D">
          <NavBar alerts={alert} />

          <NextDayGrid forecastday={forecastday} />

          <br />

          <Stack
            as="section"
            mt={'2rem'}
            justifyContent="center"
            flexDir={'row'}
            alignItems={'center'}
            maxW="100vw"
          >
            <Stack
              as="section"
              mt={'2rem'}
              justifyContent="center"
              flexDir={'column'}
              alignItems={'center'}
              maxW="70vw"
              p={4}
            >
              <Heading>Weather per Hour</Heading>
              <WeatherPerHour hour={forecastday[0].hour} />
            </Stack>
          </Stack>
          {/* <Stack
            as="section"
            mt={'2rem'}
            justifyContent="center"
            flexDir={'row'}
            alignItems={'center'}
            maxW="100vw"
          >
            <CurrentChart data={forecastday[0].hour} />
          </Stack> */}
          <Stack
            as="section"
            mt={'2rem'}
            justifyContent="center"
            flexDir={'column'}
            alignItems={'center'}
            maxW="90vw"
            p={4}
          >
            <Heading> {`Today’s Hightlights `}</Heading>
            <Hightlights current={current} />
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
