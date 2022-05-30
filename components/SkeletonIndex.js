import { Stack,Skeleton } from '@chakra-ui/react'
import NavBar from './NavBar'

const SkeletonIndex = () => {
  return (
    <Stack
          as="main"
          minW={'100vw'}
          minHeight={'100vh'}
          flexDir={{
            base: 'column',
            md: 'row'
          }}
        >
          <Skeleton>
            <Stack
              as="section"
              width={{
                base: '100%',
                md: '459px'
              }}
              bgColor="#1E213A"
            ></Stack>
          </Skeleton>
          <Stack as="section" width={'100%'} bgColor="#100E1D">
            <Skeleton>
              <NavBar />
            </Skeleton>

            <Stack
              as={'section'}
              display={'flex'}
              flexDirection={{
                base: 'column',
                md: 'row'
              }}
              h={'100%'}
              w={'100%'}
              justifyContent="space-around"
              wrap={'wrap'}
              alignItems={'center'}
            ></Stack>
          </Stack>
        </Stack>
  )
}

export default SkeletonIndex