import React from 'react'
import { Slide, Heading, Text, Box } from 'spectacle'

export default function ThankYouSlide() {
  return (
    <Slide backgroundColor="primary">
      <Heading color="tertiary" size={1} margin="0 0 40px 0">
        Thank You!
      </Heading>
      <Box color="tertiary" fontSize="24px">
        <Text>Questions?</Text>
        <Text margin="20px 0">
          BitMEX WebSocket API Documentation:
        </Text>
        <Text fontSize="18px" color="quaternary">
          https://www.bitmex.com/app/wsAPI
        </Text>
      </Box>
    </Slide>
  )
}
