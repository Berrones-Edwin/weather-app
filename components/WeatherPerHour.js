import { Stack } from '@chakra-ui/react'
import CardWeatherPerHour from './CardWeatherPerHour'

const WeatherPerHour = ({hour}) => {
  return (
    <Stack
    ml={'1px'}
      as={'section'}
      display={'flex'}
      flexDirection={'row'}
      overflowX={'auto'}
      justifyContent="space-around"
       alignItems={'center'}
       w='100%'
       whiteSpace={'nowrap'}
       overflowY='hidden'
    >
      {hour.map((d) => (
        <CardWeatherPerHour key={d.time} data={d} />
      ))}
    </Stack>
  )
}

export default WeatherPerHour
