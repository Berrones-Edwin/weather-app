import { Stack } from '@chakra-ui/react'
import NextDayItem from './NextDayItem'

const NextDayGrid = ({ forecastday }) => {
  return (
    <Stack
      display={'flex'}
      flexDirection={{
        base: 'column',
        md: 'row'
      }}
      justifyContent="space-around"
      wrap={'wrap'}
      alignItems={'center'}
    >
      {forecastday.map((day) => (
        <NextDayItem key={day.date} day={day} />
      ))}
    </Stack>
  )
}

export default NextDayGrid
