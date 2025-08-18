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
        <Box marginTop="80px">
          <Text fontSize="18px">
            GitHub Repository:
          </Text>
          <a 
            href="https://github.com/byshing/bitmex-websocket-presentation" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#60a5fa',
              textDecoration: 'none',
              fontSize: '20px',
              fontWeight: 500,
              textShadow: '0 2px 8px rgba(96, 165, 250, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#93c5fd'
              e.target.style.textShadow = '0 2px 12px rgba(96, 165, 250, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#60a5fa'
              e.target.style.textShadow = '0 2px 8px rgba(96, 165, 250, 0.3)'
            }}
          >
            github.com/byshing/bitmex-websocket-presentation
          </a>
        </Box>
      </Box>
    </Slide>
  )
}
