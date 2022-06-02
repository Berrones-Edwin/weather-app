import { Stack } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { useTemperature } from '../hooks/useTemperature'
const hours = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00'
]
const CurrentChart = ({ data }) => {
  const [values, setValues] = useState([])
  const { temperature } = useTemperature()
  useEffect(() => {
    data.forEach((d) => {
      setValues((oldvalues) => [
        ...oldvalues,
        temperature === '°C' ? d.temp_c : d.temp_f
      ])
    })
  }, [data, temperature])

  const data2 = {
    labels: hours,
    datasets: [
      {
        label: 'Temperature',
        backgroundColor: '#EAC435',
        borderColor: 'rgba(234, 196, 53,0.5)',
        data: values
      }
    ]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 3,
    plugins: {
      legend: {
        position: 'top',
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'gray'
        }
      },
      y: {
        ticks: {
          color: 'gray'
        }
      }
    }
  }

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
        maxW="90vw"
        w="90%"
        p={4}
      >
        {' '}
        <Line options={options} data={data2} />
      </Stack>
    </Stack>
  )
}

export default CurrentChart
