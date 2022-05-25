import {
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionPanel,
    AccordionIcon
  } from '@chakra-ui/react'
import Hightlights from './Hightlights'
import WeatherPerHour from './WeatherPerHour'
const DetailsAccordion = ({forecastday,current }) => {
  return (
    <Accordion w="80%" allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Weather per Hour
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <WeatherPerHour hour={forecastday[0].hour} />
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {`Today’s Hightlights `}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Hightlights current={current} />
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  )
}

export default DetailsAccordion