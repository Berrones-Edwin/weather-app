import { Stack, useRadioGroup } from '@chakra-ui/react'
import { useTemperature } from '../hooks/useTemperature'
import CustomRadioButton from './CustomRadioButton'
import styles from './CustomRadioGroup.module.css'


const CustomRadioGroup = () => {
  const { setTemperature} = useTemperature()

  const handleTemperature = (t) =>{
    setTemperature(t)
  }
  const options = ['°C', '°F']

  const { getRadioProps } = useRadioGroup({
    name: 'temperature',
    defaultValue: '°C',
    onChange: handleTemperature
  })
  return (
    <Stack
    as='nav'
    className={styles.stack}
      flexDir={'row'}
      justifyContent="flex-end"
      alignItems="center"
      spacing={3}
      mt={0}
    >
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <CustomRadioButton key={value} {...radio}>
            {value}
          </CustomRadioButton>
        )
      })}
    </Stack>
  )
}

export default CustomRadioGroup
