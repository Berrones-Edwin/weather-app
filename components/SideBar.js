import { useRef } from 'react'
import ImageNext from 'next/image'
import {
  Stack,
  Button,
  Heading,
  Text,
  Box,
  useDisclosure
} from '@chakra-ui/react'
import { getCurrentDate } from '../utils/dates'
import SideBarForm from './SideBarForm'
import { useTemperature } from '../hooks/useTemperature'
import ButtonOnline from './ButtonOnline'
import { flagsCountries } from '../data/flags-countries'

const SideBar = ({ current, location }) => {
  const btnOpen = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { temperature } = useTemperature()

  let label =
    temperature === '°C' ? current.temp_c + ' °C' : current.temp_f + ' °F'
  let labelFeelLike =
    temperature === '°C'
      ? current.feelslike_c + ' °C'
      : current.feelslike_f + ' °F'

  return (
    <>
      <Stack
        as="section"
        width={{
          base: '100%',
          md: '459px'
        }}
        bgColor="#1E213A"
      >
        {/* Open menu */}
        <Stack
          flexDir={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          padding={3}
          width={'100%'}
          mb={'2rem'}
        >
          <Button onClick={onOpen} ref={btnOpen} size={'sm'} bgColor="#6E707A">
            Search for places
          </Button>
          <ButtonOnline />
        </Stack>
        {/* End Open menu */}
        <Box
          mb={'87px'}
          display="flex"
          alignItems={'center'}
          justifyContent="center"
        >
          <ImageNext
            alt={current.condition.text}
            title={current.condition.text}
            src={'http:' + current.condition.icon}
            height="234px"
            width="202px"
            objectFit="cover"
          />
        </Box>
        <Stack
          flexDir={'column'}
          spacing={4}
          justifyContent="space-around"
          alignItems={'center'}
          mt={'1rem'}
          height="340px"
        >
          <Heading size={'4xl'}>{label}</Heading>
          <Heading size={'xl'}>{current.condition.text}</Heading>
          <Heading size={'sm'}>Feels like: {labelFeelLike}</Heading>
          <Text>Today {getCurrentDate(location.localtime)} </Text>

          <ImageNext
            src={
              flagsCountries.filter(
                (f) => f.name.toLowerCase() === location.country.toLowerCase()
              )[0].flag
            }
            objectFit='contain'
            height="150"
            width="100"
          />
          <Text>{location.country}</Text>
        </Stack>
      </Stack>
      <SideBarForm isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  )
}

export default SideBar
