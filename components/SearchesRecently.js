import { Stack, Flex, Button, Text } from '@chakra-ui/react'
import { usePlace } from '../hooks/usePlace'
import { getData, savedata } from '../utils/localstorage'

const SearchesRecently = ({ searches, onClose,setSearches }) => {
  const { setPlace } = usePlace()
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
                <Text onClick={() => handleClick(s.item)}>{s.item}</Text>
                <Button onClick={() => handleDeleteItem(s.id)}>
                  ❌
                </Button>
              </Flex>
            </>
          ))}
        </>
      ) : (
        <Text>You do not have recently searches </Text>
      )}
    </Stack>
  )
}

export default SearchesRecently
