import { Stack, Text, Button } from '@chakra-ui/react'
import ImageNext from 'next/image'
import { useTemperature } from '../hooks/useTemperature'

const CardWeatherPerHour = ({ data }) => {
  const { temperature } = useTemperature()
  let label = temperature === '°C' ? data.temp_c + '°C' : data.temp_f + '°F'
  return (
    <Stack as="article" key={data.time} maxW={'200px'} bgColor="#1E213A" p={5}>
      <Text textAlign={'center'} mb={'1rem'}>
        {data.time.slice(-5)}
      </Text>
      <ImageNext
        alt={data.condition.text}
        title={data.condition.text}
        src={'http:' + data.condition.icon}
        height="100px"
        width="100px"
        objectFit="cover"
      />

      <Button variant="ghost">{label}</Button>
    </Stack>
  )
}

export default CardWeatherPerHour
