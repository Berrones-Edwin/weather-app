import { Stack, Flex, Button, Text, ButtonGroup, useToast } from '@chakra-ui/react'
import { usePlace } from '../hooks/usePlace'
import { getData, savedata } from '../utils/localstorage'
import { useFavorites } from '../hooks/useFavorites'

const SearchesRecently = ({ searches, onClose, setSearches }) => {
  const { setPlace } = usePlace()
  const toast = useToast()

  const { favorites, setFavorites } = useFavorites()

  function handleClick(item) {
    setPlace(item)
    onClose()
  }
  function handleDeleteItem(id) {
    let items = searches
    items = items.filter((i) => i.id !== id)
    localStorage.clear('searches')
    localStorage.setItem('searches', JSON.stringify(items))
    setSearches(items)

    toast({
      title: 'Item deleted.',
      description: "We've deleted the country for you.",
      status: 'error',
      duration: 1000,
      isClosable: true,
    })
  }
  function handleDeleteFavorite(id) {
    let items = favorites
    items = items.filter((i) => i.id !== id)
    localStorage.clear('favorites')
    localStorage.setItem('favorites', JSON.stringify(items))
    setFavorites(items)

    toast({
      title: 'Favorite deleted.',
      description: "We've deleted the country for you.",
      status: 'error',
      duration: 1000,
      isClosable: true,
    })
  }

  function handleFavorites(item) {
    
    savedata(item, 'favorites')
    setFavorites(getData('favorites'))
    toast({
      title: 'Favorite added.',
      description: "We've added your country for you.",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  }

  return (
    <Stack>
      {searches.length > 0 ? (
        <>
          <Text textAlign={'center'}>Your recently searches </Text>
          {searches.map((s) => (
            <>
              <Flex
                w="100%"
                direction={'row'}
                justifyContent={'space-between'}
                alignItems="center"
                key={s.id}
              >
                <Text cursor={'pointer'} _hover={{
                  color:'yellow'
                }} onClick={() => handleClick(s.item)}>{s.item}</Text>
                <ButtonGroup>
                  <Button onClick={() => handleFavorites(s.item)}>⭐</Button>
                  <Button onClick={() => handleDeleteItem(s.id)}>❌</Button>
                </ButtonGroup>
              </Flex>
            </>
          ))}
        </>
      ) : (
        <Text>You do not have recently searches 😪</Text>
      )}

      <hr />
      <br />
      {favorites.length > 0 ? (
        <>
          <Text textAlign={'center'}>Your Favorites </Text>
          {favorites.map((s) => (
            <>
              <Flex
                w="100%"
                direction={'row'}
                justifyContent={'space-between'}
                alignItems="center"
                key={s.id}
              >
                <Text onClick={() => handleClick(s.item)}>{s.item}</Text>
                <ButtonGroup>
                  <Button onClick={() => handleDeleteFavorite(s.id)}>❌</Button>
                </ButtonGroup>
              </Flex>
            </>
          ))}
        </>
      ) : <Text>You do not have favorites places 😪 </Text>}
    </Stack>
  )
}

export default SearchesRecently
