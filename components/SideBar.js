import { useRef, useState } from 'react'
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

const SideBar = ({ current, location }) => {
  const btnOpen = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <Button size={'sm'} bgColor="#6E707A">
            O
          </Button>
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
          height="100%"
        >
          <Heading size={'4xl'}>{current.temp_c + ' °C'}</Heading>
          <Heading size={'xl'}>{current.condition.text}</Heading>
          <Text>Today {getCurrentDate()} </Text>
          <Text> 🌏 {location.country} </Text>
        </Stack>
      </Stack>
      <SideBarForm isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  )
}

export default SideBar
