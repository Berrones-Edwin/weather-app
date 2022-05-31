import { Stack, Text, Heading } from '@chakra-ui/react'
import { WiWindy, WiHumidity,WiEarthquake } from 'react-icons/wi'

const Hightlights = ({ current }) => {
  return (
    <Stack
      w="80%"
      as="section"
      flexDir={{
        base: 'column',
        md: 'row'
      }}
      justifyContent="space-around"
      wrap={'wrap'}
      alignItems="center"
      spacing={5}
    >
      <Stack
        as="article"
        bgColor="#1E213A"
        p={5}
        w={'300px'}
        h={'200px'}
        flexDir="column"
        justifyContent={'center'}
        alignItems="center"
      >
        <Stack
          display={'flex'}
          flexDir="row"
          alignItems={'center'}
          justifyContent="space-around"
        >
          <WiWindy size="80px" />
          <Text size={'lg'} w="100%" textAlign={'center'}>
            {' '}
            Wind Status
          </Text>
        </Stack>
        <Heading size={'2xl'}>{current.wind_mph} mpH</Heading>
      </Stack>
      <Stack
        as="article"
        bgColor="#1E213A"
        p={5}
        w={'300px'}
        h={'200px'}
        flexDir="column"
        justifyContent={'center'}
        alignItems="center"
        spacing={4}
      >
        <Stack
          display={'flex'}
          flexDir="row"
          alignItems={'center'}
          justifyContent="space-around"
        >
          <WiHumidity size='50px' />
          <Text size='lg'>Humidity</Text>
        </Stack>
        <Heading size={'2xl'}>{current.humidity}%</Heading>
        <progress id="humidity" max="100" value={current.humidity}>
          {' '}
          {current.humidity}{' '}
        </progress>
      </Stack>
      <Stack
        as="article"
        bgColor="#1E213A"
        p={5}
        w={'300px'}
        h={'200px'}
        flexDir="column"
        justifyContent={'center'}
        alignItems="center"
      >
        <WiEarthquake size='50px' />
        <Text>Visibility</Text>
        <Heading size={'2xl'}>{current.vis_miles} miles</Heading>
      </Stack>
      <Stack
        as="article"
        bgColor="#1E213A"
        p={5}
        w={'300px'}
        h={'200px'}
        flexDir="column"
        justifyContent={'center'}
        alignItems="center"
      >
        <Text>Air Pressure</Text>
        <Heading size={'2xl'}>{current.pressure_mb} mb</Heading>
      </Stack>
    </Stack>
  )
}

export default Hightlights
