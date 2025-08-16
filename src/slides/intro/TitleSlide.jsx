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
            fontSize: '4.5rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '20px'
          }}
        >
          BitMEX WebSocket
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
            marginLeft: 'auto',
            marginRight: 'auto',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          Understanding real-time data streams and state synchronization
        </Text>
        <Box 
          margin="40px 0"
          style={{
            padding: '20px',
            borderRadius: '12px',
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Text fontSize="18px" color="primary" style={{ fontWeight: 500 }}>
            Interactive Presentation with Live WebSocket Demo
          </Text>
        </Box>
      </Box>
    </Slide>
  )
}
