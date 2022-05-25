import { Stack } from '@chakra-ui/react'
import { usePlace } from '../hooks/usePlace'
import { useRealTimeWeather } from '../hooks/useRealTimeWeather'
import { HeadComponent } from '../components/Head'
import CustomRadioGroup from '../components/CustomRadioGroup'
import SideBar from '../components/SideBar'
import NextDayGrid from '../components/NextDayGrid'
import DetailsAccordion from '../components/DetailsAccordion'

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

          <br />
          <Stack
            as="section"
            mt={'2rem'}
            justifyContent="center"
            flexDir={'row'}
            w="100%"
          >
            <DetailsAccordion forecastday={forecastday} current={current} />
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
