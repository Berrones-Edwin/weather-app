import { useState, useEffect } from 'react'
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
  DrawerFooter
} from '@chakra-ui/react'
import { usePlace } from '../hooks/usePlace'
import { savedata, getData } from '../utils/localstorage'
import SearchesRecently from './SearchesRecently'
import { countriesData } from '../data/countries-cities'

const SideBarForm = ({ isOpen, onClose, btnOpen }) => {
  const [inputChange, setInputChange] = useState('')
  const [searches, setSearches] = useState(getData('searches'))
  const { setPlace } = usePlace()
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesData.forEach((c) => {
      setCountries((oldValues) => [...oldValues, c.name])
    })
  }, [])

  const handleInputChange = (e) => {
    setInputChange(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(inputChange)
    setInputChange('')
    savedata(inputChange, 'searches')
    setSearches(getData('searches'))
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
              placeholder="City or Lat/Lon or ZipCode"
              name="location"
              value={inputChange}
              onChange={handleInputChange}
              list="countries"
              autoComplete='off'
            />
            <datalist id="countries">
              {countries.map((c, id) => (
                <option key={c + id}>{c}</option>
              ))}
            </datalist>
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
          <SearchesRecently
            setSearches={setSearches}
            onClose={onClose}
            searches={searches}
          />
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default SideBarForm
