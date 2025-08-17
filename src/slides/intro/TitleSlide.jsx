import React from 'react'
import { Slide, Heading, Text, Box } from 'spectacle'

export default function TitleSlide() {
  return (
    <Slide >
      <Box textAlign="center" className="fade-in-up">
        <Heading 
          margin="0px" 
          color="primary" 
          size={1}
          className="enhanced-heading glow-text"
          style={{
            fontSize: '4rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '20px'
          }}
        >
          Introduction to BitMEX WebSocket Feed
        </Heading>
        <Heading 
          margin="0px 0px 60px" 
          color="accent" 
          size={2}
          className="enhanced-subheading"
          style={{
            fontSize: '3rem',
            fontWeight: 600,
            letterSpacing: '-0.01em'
          }}
        >
          Data Types & State Management
        </Heading>
        <Text 
          fontSize="28px" 
          color="secondary" 
          margin="60px 0px"
          style={{
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: '800px',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          Understanding real-time data streams and state synchronization
        </Text>
      </Box>
    </Slide>
  )
}
