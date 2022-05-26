import { Stack,Text,Heading } from '@chakra-ui/react'

const Hightlights = ({current}) => {
  return (
    <Stack
    w="100%"
    as="section"
    flexDir={{
      base: 'column',
      md: 'row'
    }}
    justifyContent="space-between"
    wrap={'wrap'}
    alignItems="center"
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
      <Text>Wind Status</Text>
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
      <Text>Humidity</Text>
      <Heading size={'2xl'}>{current.humidity}%</Heading>
      <progress id="humidity" max="100" value={current.humidity}> {current.humidity} </progress>
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