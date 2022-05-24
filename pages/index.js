
import {
  Stack
} from '@chakra-ui/react'

import { HeadComponent } from '../components/Head'
import SideBar from '../components/SideBar'
import { usePlace } from '../hooks/usePlace'
import { useRealTimeWeather } from '../hooks/useRealTimeWeather'

export default function Home() {
  const {place } = usePlace()
  const { response, errorResponse } = useRealTimeWeather(place)
  
  if (errorResponse) {
    ;<p>Error</p>
  }

  if (response === null) {
    return <p>response null</p>
  }

  const { location, current } = response

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            commodi.
          </p>
        </Stack>
      </Stack>
    </>
  )
}
