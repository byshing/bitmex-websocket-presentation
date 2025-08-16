import React from 'react'
import { Slide, Heading, Grid, FlexBox, Text } from 'spectacle'

export default function OperationsOverviewSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3}>WebSocket Data Operation Types</Heading>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap="20px" margin="40px 0">
        <FlexBox 
          backgroundColor="rgba(0, 150, 255, 0.1)" 
          border="2px solid #0096ff"
          borderRadius="15px"
          padding="20px"
          flexDirection="column"
          alignItems="center"
        >
          <Heading color="#0096ff" size={5}>PARTIAL</Heading>
          <Text color="secondary" fontSize="18px">Initial snapshot</Text>
        </FlexBox>
        
        <FlexBox 
          backgroundColor="rgba(0, 255, 0, 0.1)" 
          border="2px solid #00ff00"
          borderRadius="15px"
          padding="20px"
          flexDirection="column"
          alignItems="center"
        >
          <Heading color="#00ff00" size={5}>INSERT</Heading>
          <Text color="secondary" fontSize="18px">New records</Text>
        </FlexBox>
        
        <FlexBox 
          backgroundColor="rgba(255, 165, 0, 0.1)" 
          border="2px solid #ffa500"
          borderRadius="15px"
          padding="20px"
          flexDirection="column"
          alignItems="center"
        >
          <Heading color="#ffa500" size={5}>UPDATE</Heading>
          <Text color="secondary" fontSize="18px">Modify existing</Text>
        </FlexBox>
        
        <FlexBox 
          backgroundColor="rgba(255, 0, 0, 0.1)" 
          border="2px solid #ff4444"
          borderRadius="15px"
          padding="20px"
          flexDirection="column"
          alignItems="center"
        >
          <Heading color="#ff4444" size={5}>DELETE</Heading>
          <Text color="secondary" fontSize="18px">Remove records</Text>
        </FlexBox>
      </Grid>
    </Slide>
  )
}
