import React from 'react'
import { Slide, Heading, Text } from 'spectacle'

export default function TitleSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading margin="0px" color="primary" size={1}>
        BitMEX WebSocket
      </Heading>
      <Heading margin="0px 0px 40px" color="primary" size={2}>
        Data Types & State Management
      </Heading>
      <Text fontSize="24px" color="secondary" margin="40px 0px">
        Understanding real-time data streams and state synchronization
      </Text>
    </Slide>
  )
}
