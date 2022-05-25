import { Stack } from '@chakra-ui/react'
import CardWeatherPerHour from './CardWeatherPerHour'

const WeatherPerHour = ({hour}) => {
  return (
    <Stack
      as={'section'}
      display={'flex'}
      flexDirection={{
        base: 'column',
        md: 'row'
      }}
      justifyContent="space-around"
      wrap={'wrap'}
      alignItems={'center'}
      p={3}
      spacing={5}
      w="100%"
    >
      {hour.map((d) => (
        <CardWeatherPerHour key={d.time} data={d} />
      ))}
    </Stack>
  )
}

export default WeatherPerHour
