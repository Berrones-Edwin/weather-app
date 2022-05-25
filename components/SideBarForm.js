import { useState } from 'react'
import {
  Stack,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
} from '@chakra-ui/react'
import { usePlace } from '../hooks/usePlace'
import { savedata, getData } from '../utils/localstorage'
import SearchesRecently from './SearchesRecently'

const SideBarForm = ({ isOpen, onClose, btnOpen }) => {
  const [inputChange, setInputChange] = useState('')
  const [searches, setSearches] = useState( getData())
  const { setPlace } = usePlace()

  const handleInputChange = (e) => {
    setInputChange(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(inputChange)
    setInputChange('')
    savedata(inputChange)
    setSearches(getData())
  }

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnOpen}
      bgColor="#1E213A"
    >
      <DrawerOverlay />
      <DrawerContent bgColor="#1E213A">
        <DrawerCloseButton />
        <DrawerHeader>Search your Location</DrawerHeader>

        <DrawerBody>
          <Stack as={'form'} mb={'3rem'} onSubmit={handleSubmit}>
            <Input
              required
              border="1px solid white"
              placeholder="Search Location"
              name="location"
              value={inputChange}
              onChange={handleInputChange}
            />
            <Button
              onClick={onClose}
              onSubmit={handleSubmit}
              type={'submit'}
              bgColor="#3C47E9"
            >
              {' '}
              Search
            </Button>
          </Stack>
          <hr />
          <br />
          <SearchesRecently onClose={onClose} searches={searches} />
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default SideBarForm
