import { useState } from 'react'
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter
} from '@chakra-ui/react'
import { usePlace } from '../hooks/usePlace'

const SideBarForm = ({ isOpen, onClose, btnOpen }) => {
  const [inputChange, setInputChange] = useState('')
  const { setPlace } = usePlace()

  const handleInputChange = (e) => {
    setInputChange(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(inputChange)
    setInputChange('')
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
          <form onSubmit={handleSubmit}>
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
          </form>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default SideBarForm
