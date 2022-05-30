import { Stack, Text, Button, ButtonGroup } from '@chakra-ui/react'
import ImageNext from 'next/image'
import { useTemperature } from '../hooks/useTemperature'

const NextDayItem = ({ day }) => {
  const { temperature } = useTemperature()

  let labelMin =
    temperature === '°C' ? day.day.mintemp_c + '°C' : day.day.mintemp_f + '°F'
  let labelMax =
    temperature === '°C' ? day.day.maxtemp_c + '°C' : day.day.maxtemp_f + '°F'
  return (
    <Stack as='article' key={day.date} maxW={'200px'} bgColor="#1E213A" p={5}>
      <Text textAlign={'center'} mb={'1rem'}>
        {day.date}
      </Text>
      <ImageNext
        alt={day.day.condition.text}
        title={day.day.condition.text}
        src={'http:' + day.day.condition.icon}
        height="100px"
        width="100px"
        objectFit="cover"
      />
      <ButtonGroup>
        <Button variant="ghost" color="red">{labelMin}</Button>
        <Button variant="ghost" color="blue.400">{labelMax}</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default NextDayItem
