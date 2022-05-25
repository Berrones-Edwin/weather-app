import { Stack, Button, Text } from '@chakra-ui/react'
import { usePlace } from '../hooks/usePlace'

const SearchesRecently = ({ searches,onClose }) => {
  const { setPlace } = usePlace()
  function handleClick(item) {
    setPlace(item)
    onClose()
  }
  return (
    <Stack>
      {searches.length > 0 ? (
        <>
          <Text textAlign={'center'}>Your recently searches </Text>
          {searches.map((s) => (
            <Button
              onClick={() => handleClick(s.item)}
              bgColor="blue.600"
              key={s.id}
            >
              {s.item}
            </Button>
          ))}
        </>
      ) : (
        <Text>You do not have recently searches </Text>
      )}
    </Stack>
  )
}

export default SearchesRecently
