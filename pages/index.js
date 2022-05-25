import { Stack } from '@chakra-ui/react'
import CustomRadioGroup from '../components/CustomRadioGroup'

import { HeadComponent } from '../components/Head'
import SideBar from '../components/SideBar'
import { usePlace } from '../hooks/usePlace'
import { useRealTimeWeather } from '../hooks/useRealTimeWeather'
import NextDayGrid from '../components/NextDayGrid'

export default function Home() {
  const { place } = usePlace()
  const { response, errorResponse } = useRealTimeWeather(place)

  if (errorResponse) {
    ;<p>Error</p>
  }

  if (response === null) {
    return <p>response null</p>
  }

  const {
    location,
    current,
    forecast: { forecastday }
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
          <CustomRadioGroup />

          <NextDayGrid forecastday={forecastday} />
        </Stack>
      </Stack>
    </>
  )
}
