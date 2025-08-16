import React from 'react'
import { Slide, Heading, UnorderedList, ListItem } from 'spectacle'

export default function IntroductionSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3}>What is BitMEX WebSocket?</Heading>
      <UnorderedList color="secondary" fontSize="28px">
        <ListItem>Real-time streaming data from BitMEX exchange</ListItem>
        <ListItem>Low-latency updates for trading applications</ListItem>
        <ListItem>Efficient state synchronization mechanism</ListItem>
        <ListItem>Various data types: orders, positions, executions, market data</ListItem>
      </UnorderedList>
    </Slide>
  )
}
