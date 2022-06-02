import { Stack } from '@chakra-ui/react'
import CardWeatherPerHour from './CardWeatherPerHour'

const WeatherPerHour = ({ hour }) => {
  return (
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
        <Stack
          ml={'1px'}
          as={'section'}
          display={'flex'}
          flexDirection={'row'}
          overflowX={'auto'}
          justifyContent="space-around"
          alignItems={'center'}
          w="100%"
          whiteSpace={'nowrap'}
          overflowY="hidden"
        >
          {hour.map((d) => (
            <CardWeatherPerHour key={d.time} data={d} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default WeatherPerHour
