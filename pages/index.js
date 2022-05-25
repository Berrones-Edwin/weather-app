import {
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import CustomRadioGroup from '../components/CustomRadioGroup'
import ImageNext from 'next/image'
import { HeadComponent } from '../components/Head'
import SideBar from '../components/SideBar'
import { usePlace } from '../hooks/usePlace'
import { useRealTimeWeather } from '../hooks/useRealTimeWeather'
import NextDayGrid from '../components/NextDayGrid'
import WeatherPerHour from '../components/WeatherPerHour'

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
          {/* <hr /> */}

          <br />
          <Stack
            as="section"
            mt={'2rem'}
            justifyContent="center"
            flexDir={'row'}
            w="100%"
          >
            <Accordion w="80%" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Weather per Hour
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <WeatherPerHour hour={forecastday[0].hour} />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
