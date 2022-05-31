import { Stack, Text, Button } from '@chakra-ui/react'
import ImageNext from 'next/image'
import { useTemperature } from '../hooks/useTemperature'

const CardWeatherPerHour = ({ data }) => {
  const { temperature } = useTemperature()
  let label = temperature === '°C' ? data.temp_c + '°C' : data.temp_f + '°F'
  return (
    <Stack as="article" border='1px solid black' key={data.time} w='106px' h='170px' bgColor="#1E213A" mr={'1rem'}>
      <ImageNext
        alt={data.condition.text}
        title={data.condition.text}
        src={'http:' + data.condition.icon}
        height="100px"
        width="100px"
        objectFit="cover"
      />

      <Text textAlign={'center'} mb={'1rem'}>
        {data.time.slice(-5)}
      </Text>
      <Button variant="ghost">{label}</Button>
    </Stack>
  )
}

export default CardWeatherPerHour
